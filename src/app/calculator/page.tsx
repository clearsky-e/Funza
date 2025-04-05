"use client"

// import DateCalculator from '@/components/TIme/DateCalculator';
import CalculatorComponent from '@/components/Calculator/calculator';
import { useRouter } from 'next/navigation';


export default function CalculatorPage() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();  
    console.log('Back clicked');
    
  };


  return(
    <>
    <div>
        <button
            onClick={handleBackClick}
            className="text-white hover:underline my-4"
        >
            &larr; Back
        </button>
        {/* <h2 className="text-2xl font-bold text-center mb-6">Calculator</h2> */}
        <div className="grid gap-6 md:grid-cols-2">

            <CalculatorComponent />
          
          
    
        </div>
    </div>
    
    </>
  )
}