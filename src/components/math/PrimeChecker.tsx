import { useState } from "react";

const PrimeChecker = () => {
  const [number, setNumber] = useState<number | "">("");
  const [isPrime, setIsPrime] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value === "" ? "" : parseInt(e.target.value, 10));
  };

  const checkPrime = () => {
    if (number === "" || isNaN(number)) {
      setMessage("Please enter a valid number.");
      return;
    }

    if (number < 2) {
      setIsPrime(false);
      setMessage("A prime number must be greater than 1.");
      return;
    }

    let prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        prime = false;
        break;
      }
    }

    setIsPrime(prime);
    setMessage(""); // Reset any previous message
  };

  return (
    <div className="p-4 rounded-md ">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Prime Number Checker</h1>

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

          <button
            onClick={checkPrime}
            className="w-full max-w-xs bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Check Prime
          </button>
        </div>

        {message && (
          <p className="text-red-500 text-center mt-4">{message}</p>
        )}

        {isPrime !== null && !message && (
          <div className="mt-4 text-center text-xl">
            <p className={isPrime ? "text-green-500" : "text-red-500"}>
              {isPrime ? "It is a prime number!" : "It is not a prime number."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimeChecker;
