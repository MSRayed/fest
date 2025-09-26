import CountdownTimer from "@/components/countdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const eventDate = new Date(2025, 11, 11);

  // Format the event date for display
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="h-full bg-cornell-red">
      <div>
        <Image
          src="/banner.png"
          alt="SCPSCCC NATIONAL CULTURAL FIESTA 2025"
          width={1200}
          height={400}
          className="w-full object-cover"
          priority
        />

        <section className="py-8 bg-white">
          <div className="container mx-auto">
            <CountdownTimer
              targetDate={eventDate}
              title={`Countdown to ${formattedDate}`}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
