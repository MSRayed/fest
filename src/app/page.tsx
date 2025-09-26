import CountdownTimer from "@/components/countdown";
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
    <main className="h-full bg-primary">
      <div>
        <Image
          src="/banner.png"
          alt="SCPSCCC NATIONAL CULTURAL FIESTA 2025"
          width={1200}
          height={400}
          className="w-full object-cover"
          priority
        />

        <section className="py-8 bg-white text-center">
          <div className="container mx-auto">
            <CountdownTimer
              targetDate={eventDate}
              title={`Countdown to ${formattedDate}`}
            />

            {/* Register Button */}
            <div className="mt-6">
              <Link href="/register">
                <button className="px-6 py-3 rounded-lg bg-brown text-white font-semibold hover:bg-red-700 transition-colors">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
