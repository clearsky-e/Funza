import { useState } from "react";

export default function DateCalculator() {
  const [date, setDate] = useState("");
  const [days, setDays] = useState(""); // Set to empty string
  const [resultDate, setResultDate] = useState("");

  const calculateDate = (operation: "add" | "subtract") => {
    if (!date || !days) return; // Add a condition to check for empty days input
    const newDate = new Date(date);
    const dayCount = Number(days); // Convert days to a number

    if (operation === "add") {
      newDate.setDate(newDate.getDate() + dayCount);
    } else {
      newDate.setDate(newDate.getDate() - dayCount);
    }
    setResultDate(newDate.toDateString());
  };

  return (
    <div className="p-4 rounded-md border">
      <h3 className="font-bold text-lg">📆 Date Calculator</h3>
      <span>Pick a date, enter a number, then choose whether to add or subtract the number from the date. The result will show the updated date.</span>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded w-full mt-2"
      />
      <input
        type="number"
        value={days}
        onChange={(e) => setDays(e.target.value)} // Keep days as a string for input
        className="p-2 border rounded w-full mt-2"
        placeholder="Enter number of days"
      />
      <div className="flex justify-between mt-2">
      <button
          onClick={() => calculateDate("subtract")}
          className="bg-red-500 text-white p-2  rounded"
        >
          Subtract Days
        </button>
        <button
          onClick={() => calculateDate("add")}
          className="bg-green-700 text-white px-4 p-2 rounded"
        >
          Add Days
        </button>
     
      </div>
      {resultDate && <p className="mt-2 font-bold">Result: {resultDate}</p>}
    </div>
  );
}
