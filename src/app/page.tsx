"use client";

import CountdownTimer from "@/components/countdown";
import Image from "next/image";
import Link from "next/link";
import MapComponent from "@/components/map";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const eventDate = new Date(2025, 11, 11);

  // Format the event date for display
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <main className="h-full pb-36">
      {/* Banner */}
      <div>
        <Image
          src="/banner.png"
          alt="SCPSCCC NATIONAL CULTURAL FIESTA 2025"
          width={1200}
          height={400}
          className="w-full object-cover"
          priority
        />

        {/* Countdown + Register */}
        <section className="py-8 bg-yellow/20 border-y-2 border-yellow/30">
          <div className="container mx-auto">
            <CountdownTimer
              targetDate={eventDate}
              title={`Countdown to ${formattedDate}`}
            />

            {/* Register Button */}
            <div className="mt-8 flex justify-center">
              <Link href="/register">
                <button className="px-8 py-3 rounded-lg bg-brown text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:bg-red-700 transition-transform transition-colors">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-brown text-center mb-8">
              Event Details
            </h2>
            <p></p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date & Time */}
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
                <h3 className="text-xl font-semibold text-brown mb-2">
                  Date & Time
                </h3>
                <p>{formattedDate}</p>
                <p>Starting at 10:00 AM</p>
              </div>

              {/* Venue */}
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md">
                <h3 className="text-xl font-semibold text-brown mb-2">Venue</h3>
                <p>Savar Cantonment Public School and College</p>
                <p>Savar, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <div className="px-10">
          <Map />
        </div>
      </div>
    </main>
  );
}
