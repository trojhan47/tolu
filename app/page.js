'use client'; // Needed for animations

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
   const [petals, setPetals] = useState([]);


  // Create 10 petals on load
  useEffect(() => {
    setPetals(Array.from({ length: 10 }, (_, i) => i));
  }, []);
/* const audioRef = useRef(null);
  // const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.4; // soft background
      audio.muted = true;
      audio.play().then(() => {
        setTimeout(() => {
          audio.muted = false; // unmute shortly after
        }, 500); // adjust delay if needed
      }).catch((e) => {
        console.warn("Autoplay failed:", e);
      });
    }
  }, []); */
  const audioRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);
  
    useEffect(() => {
      const audio = audioRef.current;
  
      // Autoplay workaround: wait for user interaction
      const enableAudio = () => {
        if (audio && !hasInteracted) {
          audio.play().catch(() => {
            // Some browsers block autoplay without interaction
            console.log("Autoplay blocked. Will play on user interaction.");
          });
          setHasInteracted(true);
        }
      };
  
      // Listen for first interaction
      window.addEventListener('click', enableAudio);
      window.addEventListener('touchstart', enableAudio);
  
      return () => {
        window.removeEventListener('click', enableAudio);
        window.removeEventListener('touchstart', enableAudio);
      };
    }, [hasInteracted]);
  return (

     <main className="relative min-h-screen flex items-center justify-center bg-pink-50 px-4 text-center overflow-hidden">
      {/* Background petals */}
      {petals.map((p, index) => (
        <Image
          key={index}
          src="/petal.png"
          alt="petal"
          width={40}
          height={40}
          className={`absolute animate-float z-0`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animationDuration: `${8 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Background Music */}
      <audio ref={audioRef} src="/music/home.mp3" loop volume="0.5" />
      {/* <audio
        ref={audioRef}
        src="/music/home.mp3"
        autoPlay
        muted // this will be undone in useEffect
        loop
        playsInline // for iOS compatibility
      /> */}

      {/* Main content */}
      <div className="relative z-10 max-w-2xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-700">
          To Tolu... The Girl I Saw Once & Chose Always
        </h1>

        <p className="text-gray-600">
          Welcome to our love story — a journey of fate, laughter, perfume notes, and forever.
        </p>

        <button
  onClick={() => (window.location.href = '/how-we-met')}
  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
>
  Start Our Journey
</button>
        
      </div>
      
    </main>
  );
}
