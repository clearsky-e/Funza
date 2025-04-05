"use client";
import CurrencyConverter from "@/components/Conversion/CurrencyConverter";
import LengthWeightConverter from "@/components/Conversion/LengthWeightConverter";
import TemperatureConverter from "@/components/Conversion/TemperatureConverter";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className="bg-gray-900 p-6">
      <button
        onClick={handleBackClick}
        className="text-white hover:underline my-4"
      >
        &larr; Back
      </button>
      <h2 className="text-2xl font-bold text-center mb-6">
        Conversion Tool Box!
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className=" p-4 border">
          <CurrencyConverter />
        </div>

        <div className=" p-4 border">
          <LengthWeightConverter />
        </div>

        <div className=" p-4 border">
          <TemperatureConverter />
        </div>
      </div>
    </div>
  );
};

export default Page;
