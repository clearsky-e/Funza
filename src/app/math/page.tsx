"use client"

import LcmGcdFinder from '@/components/math/LcmGcdFinder';
import PowerCalculator from '@/components/math/PowerCalculator';
import PrimeChecker from '@/components/math/PrimeChecker';
import RootFinder from '@/components/math/RootFinder';
import { useRouter } from 'next/navigation';

export default function Math() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();  
    
  };


  return(
    <>
    <div className='bg-gray-900 p-6'>
        <button
            onClick={handleBackClick}
            className="text-white hover:underline my-4"
        >
            &larr; Back
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Math Fun</h2>
        <div className="grid gap-6 md:grid-cols-2">
        <div className=" p-4 border"> 
            <RootFinder /> 
        </div>
        <div className=" p-4 border"> 
            <PrimeChecker />
        </div>
        <div className=" p-4 border">
            <LcmGcdFinder />
           </div>
        <div className=" p-4 border"> 
            <PowerCalculator />
        </div>
          
    
        </div>
    </div>
    
    </>
  )
}