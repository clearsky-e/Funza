"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

// Pass currentTime as a prop from the server-side
export default function Header({ initialTime }: { initialTime: string }) {
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime()); // Update every second
    }, 1000);
    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
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

// Fetch the current time server-side to ensure synchronization
export async function getServerSideProps() {
  const currentTime = getFormattedTime(); // Fetch current time
  return { props: { initialTime: currentTime } }; // Pass it to the Header component
}
