import { useState, useEffect } from "react";

const MathTrivia = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<number | "">("");
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(15);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [inputStatus, setInputStatus] = useState<"correct" | "incorrect" | "default">("default");
  const [gameStarted, setGameStarted] = useState<boolean>(false); // Track if the game has started

  // Function to generate a random math question
  const generateQuestion = () => {
    const operations = ["+", "-", "*", "/"];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let questionText = "";
    let correctAnswer = 0;

    switch (operation) {
      case "+":
        questionText = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
      case "-":
        questionText = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
      case "*":
        questionText = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
        break;
      case "/":
        questionText = `${num1} / ${num2}`;
        correctAnswer = num1 / num2;
        break;
    }

    setQuestion(questionText);
    setCorrectAnswer(correctAnswer);
    setAnswer("");
  };

  // Handle the answer submission
  const handleSubmitAnswer = () => {
    if (correctAnswer === null) return;

    if (answer === correctAnswer) {
      setScore((prevScore) => prevScore + 10);
      setInputStatus("correct");
    } else {
      setScore((prevScore) => prevScore - 5);
      setInputStatus("incorrect");
    }

    // Generate a new question after answering
    setTimeout(() => setInputStatus("default"), 1000); // Reset input border color after 1 second
    generateQuestion();
  };

  // Countdown timer logic
  useEffect(() => {
    if (gameStarted && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown); // Cleanup the interval
    } else if (timer === 0) {
      setIsGameOver(true);
    }
  }, [timer, gameStarted]);

  // Start the game when the user clicks the "Start Game" button
  const handleStartGame = () => {
    setGameStarted(true); // Game started
    setTimer(15); // Reset timer to 15 seconds
    generateQuestion(); // Generate the first question
  };

  // Handle input change
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value === "" ? "" : parseFloat(e.target.value));
  };

  // Handle Enter key press to submit the answer
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmitAnswer();
    }
  };

  return (
    <div className="p-4 rounded-md ">
      <h3 className="font-bold text-lg">➗ Math Trivia Challenge</h3>
      <span>
        Solve the math questions and see if you can get the highest score!
      </span>

      {/* Display instructions before the game starts */}
      {!gameStarted && (
        <div className="flex justify-center p-11 flex-col text-center">
          <span>For Correct Answer: +10 points</span>
          <span>For Wrong Answer: -5 points</span>

          <button
            onClick={handleStartGame}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 m-auto mt-2 w-full max-w-xs"
          >
            Start Game
          </button>
        </div>
      )}

      {/* Game Content */}
      {gameStarted && !isGameOver ? (
        <div className="max-w-xl w-full text-white rounded-lg shadow-lg p-6 mt-4">
          <div className="text-center text-2xl mb-4">
            <p className="font-semibold">Question: {question}</p>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="number"
              value={answer}
              onChange={handleAnswerChange}
              onKeyDown={handleKeyDown} // Trigger submission on Enter key press
              className={`p-2 border rounded w-full max-w-xs mt-2 ${
                inputStatus === "incorrect"
                  ? "border-red-500 shadow-red-500"
                  : inputStatus === "correct"
                  ? "border-green-500 shadow-green-500"
                  : ""
              }`}
              placeholder="Your Answer"
            />
            <button
              onClick={handleSubmitAnswer}
              className="bg-blue-500 text-white p-2 rounded w-full max-w-xs mt-2"
            >
              Submit Answer
            </button>
            <div className="mt-4 text-center">
              <p className="font-bold">Time Left: {timer} seconds</p>
              <p className="font-bold">Score: {score}</p>
            </div>
          </div>
        </div>
      ) : null}

      {/* Game Over Section */}
      {isGameOver && (
        <div className="max-w-xl w-full rounded-lg shadow-lg p-6 text-center mt-4">
          <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
          <p className="text-xl mb-4">Your final score is: {score}</p>
          <button
            onClick={() => {
              setIsGameOver(false);
              setScore(0);
              setAnswer("");
              setTimer(15);
              setGameStarted(false); // Reset the game start state
            }}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default MathTrivia;
