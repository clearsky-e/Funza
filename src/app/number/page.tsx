"use client";

import GuessNumber from "@/components/number/guessNumber";
import MathTrivia from "@/components/number/MathTrivia";
import { useRouter } from "next/navigation";

export default function NumberPlay() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <div className="bg-gray-900 p-6">
        <button
          onClick={handleBackClick}
          className="text-white hover:underline mb-4"
        >
          &larr; Back
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Number Play</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className=" p-4 border">
            <GuessNumber />
          </div>
          <div className=" p-4 border">
            <MathTrivia />
          </div>
        </div>
      </div>
    </>
  );
}
