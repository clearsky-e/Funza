"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<header className="w-full text-center bg-gray-800 text-white py-3 shadow-md sticky top-0 z-10">
  <Link href="/" passHref>
    <h1 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase cursor-pointer">
      Funza
    </h1>
  </Link>
  <h2 className="text-lg font-semibold">{currentTime}</h2>
</header>
  
  );
}

// Function to format time
function getFormattedTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: "short", 
    day: "2-digit", 
    month: "long", 
    year: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: true 
  };
  return now.toLocaleString("en-US", options);
}
