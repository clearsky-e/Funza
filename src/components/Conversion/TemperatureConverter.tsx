import { useState } from 'react';

const TemperatureConverter: React.FC = () => {
  const [temp, setTemp] = useState<string>(''); // Set initial value as empty string
  const [convertedTemp, setConvertedTemp] = useState<number | null>(null);
  const [unitFrom, setUnitFrom] = useState<string>('Celsius');
  const [unitTo, setUnitTo] = useState<string>('Fahrenheit');

  const convertTemperature = (): void => {
    const numericTemp = parseFloat(temp); // Convert string to number for calculation

    if (isNaN(numericTemp)) return; // Don't proceed if it's not a valid number

    if (unitFrom === 'Celsius' && unitTo === 'Fahrenheit') {
      setConvertedTemp((numericTemp * 9) / 5 + 32);
    } else if (unitFrom === 'Fahrenheit' && unitTo === 'Celsius') {
      setConvertedTemp(((numericTemp - 32) * 5) / 9);
    } else if (unitFrom === 'Celsius' && unitTo === 'Kelvin') {
      setConvertedTemp(numericTemp + 273.15);
    } else if (unitFrom === 'Kelvin' && unitTo === 'Celsius') {
      setConvertedTemp(numericTemp - 273.15);
    }
    // Add more conversion logic if needed
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Temperature Converter</h1>

      <div className="max-w-xl w-full rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <input
            type="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)} // Allow string input for the temp state
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            placeholder="Enter temperature"
          />
        </div>

        <div className="flex space-x-2 mb-4">
          <select
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg bg-gray-700"
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>

          <span className="text-xl text-white">to</span>

          <select
            value={unitTo}
            onChange={(e) => setUnitTo(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg bg-gray-700"
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Kelvin">Kelvin</option>
          </select>
        </div>

        <button
          onClick={convertTemperature}
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
        >
          Convert
        </button>

        {convertedTemp !== null && (
          <p className="mt-4 text-lg font-semibold text-green-500">
            Converted Temperature: {convertedTemp.toFixed(2)} {unitTo}
          </p>
        )}
      </div>
    </div>
  );
};

export default TemperatureConverter;
