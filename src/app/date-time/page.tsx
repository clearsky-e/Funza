"use client";

import DateCalculator from "@/components/TIme/DateCalculator";
import TimezoneConverter from "@/components/TIme/TimezoneConverter";
import DayFinder from "@/components/TIme/DayFinder";
import { useRouter } from "next/navigation";

export default function TimeUtility() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
    console.log("Back clicked");
  };

  return (
    <div className="bg-gray-900 p-6 ">
      <button
        onClick={handleBackClick}
        className="text-white hover:underline mb-4"
      >
        &larr; Back
      </button>
      <h2 className="text-2xl font-bold text-center">Time Utility</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4">
          <DateCalculator />
        </div>

        <div className="p-4">
          <TimezoneConverter />
        </div>
        <div className="p-4">
          <DayFinder />
        </div>
      </div>
    </div>
  );
}
