import { useState } from "react";

export default function GuessNumber() {
  // State variables to hold the generated random number and user input values
  const [toGuessed, setToGuessed] = useState<number | null>(null);
  const [startValue, setStartValue] = useState<number | "">("");
  const [endValue, setEndValue] = useState<number | "">("");
  const [guessValue, setGuessValue] = useState<number | "">("");
  const [message, setMessage] = useState<string>("");

  // Function to generate the random number based on the current range
  const generateRandomNumber = () => {
    if (startValue && endValue && startValue < endValue) {
      const randomNumber = Math.floor(Math.random() * (endValue - startValue + 1)) + startValue;
      setToGuessed(randomNumber);
      console.log("Random number generated:", randomNumber); // For debugging purposes
      setMessage("Range is valid! Now try guessing!");
    } else {
      setMessage("Please enter a valid range first.");
    }
  };

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setStartValue(value);
    } else {
      setStartValue("");
    }
  };

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setEndValue(value);
    } else {
      setEndValue("");
    }
  };

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setGuessValue(value);
    } else {
      setGuessValue("");
    }
  };

  const checkGuess = () => {
    // Check if valid range values are entered
    if (startValue === "" || endValue === "" || isNaN(startValue) || isNaN(endValue) || startValue >= endValue) {
      setMessage("Please enter a valid range.");
      return;
    }

    // Check if a random number is generated
    if (toGuessed === null) {
      setMessage("Please generate a number by entering a valid range first.");
      return;
    }

    // Check if the user has entered a guessed number
    if (guessValue === "" || isNaN(guessValue)) {
      setMessage("Please enter a valid guessed number.");
      return;
    }

    // Compare the guess with the generated number
    if (guessValue === toGuessed) {
      setMessage("Congratulations! You guessed it right! 🎉");
    } else {
      setMessage("Oops! You guessed it wrong, please try again! 😊");
    }
  };

  return (
    <div>
      <h1 className="font-bold text-lg">Guess the Number</h1>
      <span>Take a chance and test your luck—guess the number within the range you set!</span>

      <div className="space-y-4 mt-2">
        <div>
          <label htmlFor="start" className="block">
            Enter the Initial Digit
          </label>
          <input
            id="start"
            type="number"
            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            placeholder="Start"
            value={startValue}
            onChange={handleStartChange}
          />
        </div>
        <div>
          <label htmlFor="end" className="block ">
            Enter the Last Digit
          </label>
          <input
            id="end"
            type="number"
            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="End"
            value={endValue}
            onChange={handleEndChange}
            onBlur={generateRandomNumber} // Trigger random number generation on blur
          />
        </div>
        <div>
          <label htmlFor="mynum" className="block ">
            Enter Your Guessed Number
          </label>
          <input
            id="mynum"
            type="number"
            className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Guess"
            value={guessValue}
            onChange={handleGuessChange}
          />
        </div>
        <button
          onClick={checkGuess}
          className="w-full bg-green-700 text-white py-3 mt-4 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        >
          Check My Number
        </button>
      </div>
      <div id="message" className="mt-4 text-center text-xl">
        <p className={message.includes("Congratulations") ? "text-green-500" : "text-red-500"}>
          {message}
        </p>
      </div>
    </div>
  );
}
