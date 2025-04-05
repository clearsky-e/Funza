import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculation = eval(input);
      setResult(calculation.toString());
    } catch (error) {
      setResult("Error");
      console.log(error);
      
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Calculator</h1>

      <div className="max-w-xs w-full bg-white text-black rounded-lg shadow-lg p-6">
        {/* Input Display */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-full bg-gray-100 p-4 rounded-lg text-right text-xl font-semibold mb-4">
            {input || "0"}
          </div>
          <div className="w-full bg-gray-100 p-4 rounded-lg text-right text-xl font-semibold">
            {result || ""}
          </div>
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </button>

          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("*")}
          >
            ×
          </button>

          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("-")}
          >
            −
          </button>

          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={handleCalculate}
          >
            =
          </button>
          <button
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>

        {/* Clear Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClear}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
