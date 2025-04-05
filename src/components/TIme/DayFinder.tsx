"use client";
import { useState } from "react";

export default function DayFinder() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const findDay = () => {
    if (!date) return;
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const selectedDate = new Date(date);
    setDay(daysOfWeek[selectedDate.getDay()]);
  };

  return (
    <div className="p-4 rounded-md border">
      <h3 className="font-bold text-lg">📅 Day Finder</h3>
      <span>
        Pick a date, then hit the button to see the day of the week for that
        date.
      </span>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded w-full mt-2"
      />
      <div className="flex justify-end">
        <button
          onClick={findDay}
          className="bg-green-700 text-white p-2 rounded w-3xs mt-2"
        >
          Find Day
        </button>
      </div>
      {day && <p className="mt-2 font-bold">It&apos;s a {day}!</p>}
    </div>
  );
}
