"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  title?: string;
}

export default function CountdownTimer({
  targetDate,
  className = "",
  title = "Event Countdown",
}: CountdownTimerProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d > 0 ? d : 0);
      setHours(h > 0 ? h : 0);
      setMinutes(m > 0 ? m : 0);
      setSeconds(s > 0 ? s : 0);

      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-center mb-4">
        <Clock className="h-6 w-6 text-primary mr-2 animate-pulse-slow" />
        <h3 className="text-xl font-bold text-primary font-playfair">
          {title}
        </h3>
      </div>
      <div className="flex justify-center space-x-4 md:space-x-8">
        <TimeCard value={days} label="Days" />
        <TimeCard value={hours} label="Hours" />
        <TimeCard value={minutes} label="Minutes" />
        <TimeCard value={seconds} label="Seconds" />
      </div>
    </div>
  );
}

interface TimeCardProps {
  value: number;
  label: string;
}

function TimeCard({ value, label }: TimeCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-brown text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold mb-2 border-2 border-[#FFDF5A] shadow-md font-playfair">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-xs md:text-sm font-medium text-gray-700 font-poppins uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
