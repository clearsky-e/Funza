import { useState } from 'react';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
  const [currencyTo, setCurrencyTo] = useState<string>('EUR');

  const exchangeRates: Record<string, Record<string, number>> = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.24 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 87.39 },
    // Add more exchange rates if needed
  };

  const convertCurrency = (): void => {
    const realamount = parseFloat(amount);
    if (realamount <= 0 || !exchangeRates[currencyFrom] || !exchangeRates[currencyFrom][currencyTo]) {
      setConvertedAmount(null);
      return;
    }
    setConvertedAmount(realamount * exchangeRates[currencyFrom][currencyTo]);
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Currency Converter</h1>

      <div className="max-w-xl w-full  rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount((e.target.value))}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 "
            placeholder="Enter amount"
          />
        </div>

        <div className="flex space-x-2 mb-4">
          <select
            value={currencyFrom}
            onChange={(e) => setCurrencyFrom(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg bg-gray-700 "
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            {/* Add more currencies if needed */}
          </select>

          <span className="text-xl text-white">to</span>

          <select
            value={currencyTo}
            onChange={(e) => setCurrencyTo(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg bg-gray-700 "
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            {/* Add more currencies if needed */}
          </select>
        </div>

        <button
          onClick={convertCurrency}
          className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
        >
          Convert
        </button>

        {convertedAmount !== null && (
          <p className="mt-4 text-lg font-semibold text-green-500">
            Converted Amount: {convertedAmount.toFixed(2)} {currencyTo}
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
