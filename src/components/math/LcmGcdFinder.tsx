import { useState } from "react";

const LcmGcdFinder = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [operation, setOperation] = useState<"lcm" | "gcd" | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value === "" ? "" : parseInt(e.target.value, 10));
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value === "" ? "" : parseInt(e.target.value, 10));
  };

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value as "lcm" | "gcd");
  };

  const calculateLcmGcd = () => {
    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
      setMessage("Please enter valid numbers.");
      return;
    }

    if (operation === null) {
      setMessage("Please select an operation (LCM or GCD).");
      return;
    }

    const gcd = (a: number, b: number): number => {
      if (!b) return a;
      return gcd(b, a % b);
    };

    const lcm = (a: number, b: number): number => {
      return (a * b) / gcd(a, b);
    };

    if (operation === "gcd") {
      setResult(gcd(num1, num2));
    } else if (operation === "lcm") {
      setResult(lcm(num1, num2));
    }

    setMessage(""); // Reset any previous message
  };

  return (
    <div className="p-4 rounded-md ">
      <h1 className="text-2xl font-bold text-center text-white mb-6">LCM and GCD Finder</h1>

      <div className="max-w-xl w-full  rounded-lg shadow-lg p-6">
        <div className="text-center text-2xl mb-4">
          <p className="font-semibold">Enter Two Numbers</p>
        </div>

        <div className="flex flex-col items-center mb-4">
          <input
            type="number"
            value={num1}
            onChange={handleNum1Change}
            className="w-full max-w-xs p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter first number"
          />
          <input
            type="number"
            value={num2}
            onChange={handleNum2Change}
            className="w-full max-w-xs p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter second number"
          />
          <select
            value={operation || ""}
            onChange={handleOperationChange}
            className="w-full max-w-xs p-3 mb-4 bg-gray-700 rounded-lg"
          >
            <option value="">Select Operation</option>
            <option value="gcd">GCD</option>
            <option value="lcm">LCM</option>
          </select>

          <button
            onClick={calculateLcmGcd}
            className="w-full max-w-xs bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Calculate
          </button>
        </div>

        {message && (
          <p className="text-red-500 text-center mt-4">{message}</p>
        )}

        {result !== null && !message && (
          <div className="mt-4 text-center text-xl">
            <p className="text-green-500">
              {operation === "gcd"
                ? `GCD: ${result}`
                : `LCM: ${result}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LcmGcdFinder;
