"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Segment, segments } from "@/lib/utils";

import { useState } from "react";

const formSchema = z.object({
  access_key: z.string("Access key is required."),
  name: z
    .string("Name is required.")
    .min(1, "Name cannot be empty.")
    .max(50, "Name must be at most 50 characters long."),
  roll_no: z
    .string("Roll number is required.")
    .min(1, "Roll number cannot be empty.")
    .max(20, "Roll number must be at most 20 characters long."),
  institute: z
    .string("Institute name is required.")
    .min(1, "Institute name cannot be empty.")
    .max(50, "Institute name must be at most 50 characters long."),
  class: z
    .string("Class is required.")
    .min(1, "Class cannot be empty.")
    .max(12, "Class must be between 1 and 12."),
  contact_no: z
    .string("Contact number is required.")
    .min(10, "Contact number must be at least 10 digits.")
    .max(15, "Contact number must not exceed 15 digits."),
  guardian_contact_no: z
    .string("Guardian contact number is required.")
    .min(10, "Guardian contact number must be at least 10 digits.")
    .max(15, "Guardian contact number must not exceed 15 digits."),
  email: z
    .string("Email is required.")
    .email("Please enter a valid email address."),
  reference: z.string().optional(),
  category: z.enum(["Solo", "Group"], "Category is required."),
  segment: z.string("Segment is required."),
  trans_id: z.string("Transaction ID is required."),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values, null, 2),
    }).then(async (response) => {
      const json = await response.json();

      console.log(json.message);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10 mb-24"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Registration</h1>

        <input
          type="hidden"
          value="cf448f71-8edd-4eb7-bbe4-8bd1c997066e"
          {...form.register("access_key")}
        />

        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ahnaf Shahriar" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Roll No */}
        <FormField
          control={form.control}
          name="roll_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roll No.</FormLabel>
              <FormControl>
                <Input placeholder="12345" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Institute */}
        <FormField
          control={form.control}
          name="institute"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institute</FormLabel>
              <FormControl>
                <Input
                  placeholder="Savar Cantonment Public School & College"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Class */}
        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <FormControl>
                <Input placeholder="12" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Contact No */}
        <FormField
          control={form.control}
          name="contact_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact No.</FormLabel>
              <FormControl>
                <Input placeholder="01XXXXXXXXX" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Guardian Contact No */}
        <FormField
          control={form.control}
          name="guardian_contact_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Guardian Contact No.</FormLabel>
              <FormControl>
                <Input placeholder="01XXXXXXXXX" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="ahnaf@gmail.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Reference */}
        <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Reference (Campus Ambassador / Club Partner){" "}
                <span className="text-sm text-gray-500">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter name (if any)"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={(val) => {
                  field.onChange(val);
                  setSelectedCategory(val as Category);
                  form.setValue("segment", ""); // reset segment
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Solo">Solo</SelectItem>
                  <SelectItem value="Group">Group</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Segment */}
        {selectedCategory && (
          <FormField
            control={form.control}
            name="segment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Segment</FormLabel>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val); // still update react-hook-form
                    const seg = segments.find((s) => s.key === val) || null;
                    setSelectedSegment(seg);
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a segment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {segments.map(
                      (seg) =>
                        selectedCategory &&
                        seg.categories.includes(selectedCategory) && (
                          <SelectItem key={seg.key} value={seg.key}>
                            {seg.label}
                          </SelectItem>
                        )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {selectedSegment && (
          <div className="mt-2 text-lg text-white font-bold bg-cornell-red p-4 rounded-2xl">
            Fee: {selectedSegment.fee[selectedCategory!]} BDT
            <p>bkash no: 01XXXXXXXXX</p>
          </div>
        )}
        {/* Transaction id */}
        {selectedSegment && (
          <FormField
            control={form.control}
            name="trans_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transaction Id</FormLabel>
                <FormControl>
                  <Input placeholder="12345678" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
