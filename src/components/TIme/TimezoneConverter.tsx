"use client";
import { useState } from "react";

export default function TimezoneConverter() {
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("UTC");
  const [convertedTime, setConvertedTime] = useState("");

  const convertTime = () => {
    if (!time) return;
    const date = new Date(time);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    setConvertedTime(new Intl.DateTimeFormat("en-US", options).format(date));
  };

  return (
    <div className="p-4 rounded-md border">
      <h3 className="font-bold text-lg">🌍 Timezone Converter</h3>
      <span>
        Choose a date and time, pick a timezone, then hit the button to see
        the time in that timezone.
      </span>
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 border rounded w-full mt-2"
      />
      <select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        className="p-2 border rounded w-full mt-2 bg-gray-900"
      >
        {/* Default Timezone - UTC */}
        <option value="UTC">UTC</option>

        {/* US and Americas */}
        <option value="America/New_York">New York (EST)</option>
        <option value="America/Chicago">Chicago (CST)</option>
        <option value="America/Los_Angeles">Los Angeles (PST)</option>
        <option value="America/Sao_Paulo">São Paulo (BRT)</option>

        {/* Europe */}
        <option value="Europe/London">London (GMT)</option>
        <option value="Europe/Paris">Paris (CET)</option>
        <option value="Europe/Berlin">Berlin (CET)</option>
        <option value="Europe/Moscow">Moscow (MSK)</option>

        {/* Asia */}
        <option value="Asia/Kolkata">India (IST)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
        <option value="Asia/Shanghai">Shanghai (CST)</option>
        <option value="Asia/Singapore">Singapore (SGT)</option>

        {/* Oceania */}
        <option value="Australia/Sydney">Sydney (AEDT)</option>
        <option value="Australia/Melbourne">Melbourne (AEDT)</option>
        <option value="Pacific/Auckland">Auckland (NZDT)</option>

        {/* Africa */}
        <option value="Africa/Johannesburg">Johannesburg (SAST)</option>
        <option value="Africa/Nairobi">Nairobi (EAT)</option>

        {/* Middle East */}
        <option value="Asia/Dubai">Dubai (GST)</option>
        <option value="Asia/Riyadh">Riyadh (AST)</option>
      </select>
      <div className="flex justify-end">

      <button
        onClick={convertTime}
        className="bg-green-700 text-white p-2 rounded w-3xs mt-2"
        >
        Convert Time
      </button>
        </div>
      {convertedTime && (
        <p className="mt-2 font-bold">Converted Time: {convertedTime}</p>
      )}
    </div>
  );
}
