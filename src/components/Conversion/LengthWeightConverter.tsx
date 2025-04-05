import { useState } from 'react';

const LengthWeightConverter: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [convertedValue, setConvertedValue] = useState<number | null>(null);
  const [unitFrom, setUnitFrom] = useState<string>('meters');
  const [unitTo, setUnitTo] = useState<string>('kilometers');

  const conversionRates: Record<string, Record<string, number>> = {
    meters: { kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
    kilometers: { meters: 1000, miles: 0.621371, feet: 3280.84 },
    miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280 },
    feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394 },
    // Add more conversion rates if needed
  };

  const convertLengthWeight = (): void => {
    const realValue = parseFloat(value);
    if (realValue <= 0 || !conversionRates[unitFrom] || !conversionRates[unitFrom][unitTo]) {
      setConvertedValue(null);
      return;
    }
    setConvertedValue(realValue * conversionRates[unitFrom][unitTo]);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-6">Length/Weight Converter</h1>

      <div className="max-w-xl w-full  rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue((e.target.value))}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter value"
          />
        </div>

        <div className="flex space-x-2 mb-4">
          <select
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg bg-gray-700 "
          >
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
            <option value="feet">Feet</option>
            {/* Add more units if needed */}
          </select>

          <span className="text-xl text-white">to</span>

          <select
            value={unitTo}
            onChange={(e) => setUnitTo(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg bg-gray-700"
          >
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
            <option value="feet">Feet</option>
            {/* Add more units if needed */}
          </select>
        </div>

        <button
          onClick={convertLengthWeight}
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
        >
          Convert
        </button>

        {convertedValue !== null && (
          <p className="mt-4 text-lg font-semibold text-green-500">
            Converted Value: {convertedValue.toFixed(2)} {unitTo}
          </p>
        )}
      </div>
    </div>
  );
};

export default LengthWeightConverter;
