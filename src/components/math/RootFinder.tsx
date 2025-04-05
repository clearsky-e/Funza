import { useState } from "react";

const RootFinder = () => {
  const [number, setNumber] = useState<number | "">("");
  const [rootType, setRootType] = useState<"square" | "cube" | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value === "" ? "" : parseFloat(e.target.value));
  };

  const handleRootTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRootType(e.target.value as "square" | "cube");
  };

  const calculateRoot = () => {
    if (number === "" || isNaN(number)) {
      setMessage("Please enter a valid number.");
      return;
    }

    if (rootType === null) {
      setMessage("Please select a root type.");
      return;
    }

    if (rootType === "square") {
      setResult(Math.sqrt(number));
    } else if (rootType === "cube") {
      setResult(Math.cbrt(number));
    }

    setMessage(""); // Reset any previous message
  };

  return (
    <div className="p-4 rounded-md">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Root Finder</h1>

      <div className="max-w-xl w-full  rounded-lg shadow-lg p-6">
        <div className="text-center text-2xl mb-4">
          <p className="font-semibold">Enter a Number</p>
        </div>

        <div className="flex flex-col items-center mb-4">
          <input
            type="number"
            value={number}
            onChange={handleNumberChange}
            className="w-full max-w-xs p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter a number"
          />
          <select
            value={rootType || ""}
            onChange={handleRootTypeChange}
            className="w-full max-w-xs p-3 mb-4 bg-gray-700 text-white rounded-lg"
          >
            <option value="">Select Root Type</option>
            <option value="square">Square Root</option>
            <option value="cube">Cube Root</option>
          </select>

          <button
            onClick={calculateRoot}
            className="w-full max-w-xs bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Find Root
          </button>
        </div>

        {message && (
          <p className="text-red-500 text-center mt-4">{message}</p>
        )}

        {result !== null && !message && (
          <div className="mt-4 text-center text-xl">
            <p className="text-green-500">
              {rootType === "square"
                ? `Square Root: ${result.toFixed(2)}`
                : `Cube Root: ${result.toFixed(2)}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RootFinder;
