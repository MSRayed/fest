"use client";

import { toast } from "sonner";
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

const formSchema = z.object({
  name: z.string().min(1).max(50),
  institute: z.string().min(1).max(50),
  class: z.number().min(1).max(12),
  contact_no: z.number(),
  email: z.string(),
  category: z.string(),
  segment: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Registration</h1>

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

        <FormField
          control={form.control}
          name="contact_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact no.</FormLabel>
              <FormControl>
                <Input placeholder="01XXXXXXXXX" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        {/* Category field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="P">Primary (1-5)</SelectItem>
                  <SelectItem value="J">Junior (6-8)</SelectItem>
                  <SelectItem value="S">Secondary (9-10)</SelectItem>
                  <SelectItem value="HS">Higher Secondary (11-12)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Segment field */}
        <FormField
          control={form.control}
          name="segment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Segment</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a segment" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="nazrul_sangeet">
                    Nazrul Sangeet (J,S,HS) - Solo
                  </SelectItem>
                  <SelectItem value="rabindra_sangeet">
                    Rabindra Sangeet (J,S,HS) - Solo
                  </SelectItem>
                  <SelectItem value="modern_singing">
                    Modern Singing (J,S,HS) - Solo
                  </SelectItem>
                  <SelectItem value="folk_dance">
                    Folk Dance (J,S,HS) - Solo, Group
                  </SelectItem>
                  <SelectItem value="modern_dance">
                    Modern Dance (J,S,HS) - Solo, Group
                  </SelectItem>
                  <SelectItem value="recitation">
                    Recitation (J,S,HS) - Solo
                  </SelectItem>
                  <SelectItem value="drawing">
                    Drawing (P,J,S,HS) - Solo
                  </SelectItem>
                  <SelectItem value="extempore_speech">
                    Extempore Speech (J,S,HS) - Solo
                  </SelectItem>
                  <SelectItem value="photography">
                    Photography Exhibition
                  </SelectItem>
                  <SelectItem value="wall_magazine">Wall Magazine</SelectItem>
                  <SelectItem value="book_quiz">Book Based Quiz</SelectItem>
                  <SelectItem value="movie_quiz">Movie Quiz</SelectItem>
                  <SelectItem value="battle_of_bands">
                    Battle of Bands
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
