import { useState } from "react";

const PowerCalculator = () => {
  const [number, setNumber] = useState<number | "">("");
  const [power, setPower] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value === "" ? "" : parseInt(e.target.value, 10));
  };

  const handlePowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPower(e.target.value === "" ? "" : parseInt(e.target.value, 10));
  };

  const calculatePower = () => {
    if (number === "" || isNaN(number)) {
      setMessage("Please enter a valid base number.");
      return;
    }

    if (power === "" || isNaN(power)) {
      setMessage("Please enter a valid power.");
      return;
    }

    setResult(Math.pow(number, power));
    setMessage(""); // Reset any previous message
  };

  return (
    <div className="p-4 rounded-md ">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Power Calculator</h1>

      <div className="max-w-xl w-full  rounded-lg shadow-lg p-6">
        <div className="text-center text-2xl mb-4">
          <p className="font-semibold">Enter Number and Power</p>
        </div>

        <div className="flex flex-col items-center mb-4">
          <input
            type="number"
            value={number}
            onChange={handleNumberChange}
            className="w-full max-w-xs p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter base number"
          />
          <input
            type="number"
            value={power}
            onChange={handlePowerChange}
            className="w-full max-w-xs p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter power"
          />

          <button
            onClick={calculatePower}
            className="w-full max-w-xs bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Calculate Power
          </button>
        </div>

        {message && (
          <p className="text-red-500 text-center mt-4">{message}</p>
        )}

        {result !== null && !message && (
          <div className="mt-4 text-center text-xl">
            <p className="text-green-500">
              {number} ^ {power} = {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerCalculator;
