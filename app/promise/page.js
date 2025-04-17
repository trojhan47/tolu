'use client'; // Needed for animations

import { useEffect } from "react";
import Image from "next/image";

export default function GrandPromise() {
  useEffect(() => {
    // Any animations like GSAP can be added here if needed
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-r from-rose-100 to-pink-50 flex items-center justify-center px-4 text-center overflow-hidden">
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/couple5.jpg" // Add a meaningful image of you two
          alt="Special Moment"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl space-y-12 text-center p-6 bg-white bg-opacity-60 rounded-xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-rose-700">
          Still That Guy Who Saw You Once & Chose You Always
        </h1>

        <p className="text-lg text-gray-700 mt-6">
          <span className="block text-2xl font-semibold text-rose-600">Baby,</span>
          From the moment our eyes met that Sunday in 2020, my heart recognized its counterpart. In that instant, I knew you were the one for me, not just for a fleeting moment, but for a lifetime.​
        </p>

        <p className="text-lg text-gray-700">
          Years have passed, life has brought us together by divine providence, and my choice remains unwavering. Every day, I find new reasons to love you more deeply. Your grace, intelligence, and kindness continually captivate me. You are not just my love, but my best friend, my confidante, and my greatest blessing.​
        </p>

        <p className="text-lg text-gray-700">
          As we journey through life together, I promise to stand by your side, to cherish you, to love you, to honor you, to protect you, and to choose you always.
        </p>

        <p className="text-lg text-gray-700 mt-6">
          With all my love till the day after forever, <br></br>
          <strong className="text-rose-700">Akinkunmi</strong>
        </p>

        <div className="mt-8 flex justify-center items-center space-x-6">
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Our Journey Continues
          </button>
          
        </div>
      </div>
    </main>
  );
}
