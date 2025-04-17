'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HowWeMet() {
  const [petals, setPetals] = useState([]);
  
  
    // Create 10 petals on load
    useEffect(() => {
      setPetals(Array.from({ length: 10 }, (_, i) => i));
    }, []);
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
    <main className="min-h-screen bg-white text-gray-800 px-4 py-16">
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
      <audio ref={audioRef} src="/music/met.mp3" loop volume="0.5" />
      <div className="max-w-4xl mx-auto space-y-12 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-rose-600"
        >
          How We Met
        </motion.h1>

        {/* Story Part 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          It's February 2020, and I find myself at SLC Church for the first time, thanks to some friends who assured me the service and perhaps the sermon would be worth my while. Little did I know, I was about to encounter God's perfect gift to me.​ 
        </motion.p>
         {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <img
            src="/slc-photo.jpg"
            alt="SLC Church"
            className="rounded-2xl shadow-xl mx-auto max-w-full w-[400px]"
          />
          <p className="mt-4 text-sm text-gray-500">
            📍 That unforgettable day at SLC
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          Seated near the back, close to the gallery, I was doing my best to focus on the sermon when, out of nowhere, a lady ahead of me turned around. My eyes gazed on you for a brief moment, but that was all it took. I caught a glimpse of your eyes (pure beauty) and my goodness!! I had just glimpsed the most beautiful girl ever. But it wasn't just your beauty; something deeper stirred within me. Love at first sight? Perhaps. All I knew was that I left that service with a heart full of admiration and a mind racing with thoughts of you. I even told my friends, "I saw a girl in church today, and I think I've found my wife."​ 
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          At that time, I was transitioning out of school, focused on personal growth and building my life. A relationship wasn't on my agenda, but that didn't stop me from scanning the congregation each Sunday, hoping to catch another glimpse of you. Before I could approach you, you moved to Lagos. Divine providence? Maybe.​ 
        </motion.p>

        {/* Bouncing Image: SLC Church */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-8"
        >
          <motion.img
            src="/slc-photo2.jpg"
            alt="SLC Church"
            className="rounded-2xl shadow-xl mx-auto max-w-full w-[500px]"
            animate={{
              x: [0, 50, 0, -50, 0], // horizontal bounce
              y: [0, -20, 0, 20, 0],  // vertical bounce
            }}
            transition={{
              duration: 3,
              repeat: Infinity, // repeat the bounce forever
              repeatType: "loop", // loop the animation
              ease: "easeInOut",
            }}
          />
          <p className="mt-4 text-sm text-gray-500">
            📍 The moment I saw you at SLC
          </p>
        </motion.div>

        {/* Story Part 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          November 28, 2024: A Fateful Day. Fast forward nearly five years to November 28, 2024. Eniola posted a throwback group photo from your first day in law school. Casually, I inquired about the lady who had captivated me years ago, not expecting much. Eniola's response? "She's fine. Are you looking for a wife?" (I’m really laughing here at this point typing this lol) Cue nervous laughter and a resurgence of hope. I confessed how I'd noticed you on my first day at SLC and had admired you from afar, jokingly asking if you were married (I knew the answer though). Eniola promised to find out if you were seeing someone. At this point, I asked myself if this was happening because I would not even go this far before now even for jokes. 
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          Two days later, on November 30, Eniola provided your contact information (the same I'd had since 2020 but never dared to use lol). I sensed Eniola was orchestrating something behind the scenes (thank you, my helper!). I hesitated to reach out immediately, wanting to approach with intention and avoid wasting your time. After reflection and prayer, I felt ready. The key here for me is that I didn't have any restraint as to reaching out to you, the same restraint was always there for me before this time.
        </motion.p>

        {/* Bouncing Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-8"
        >
          <motion.img
            src="/slc-photo1.jpg"
            alt="Throwback Photo"
            className="rounded-2xl shadow-xl mx-auto max-w-full w-[500px]"
            animate={{
              x: [0, -30, 0, 30, 0], // horizontal bounce
              y: [0, -10, 0, 10, 0],  // vertical bounce
            }}
            transition={{
              duration: 3,
              repeat: Infinity, // repeat the bounce forever
              repeatType: "loop", // loop the animation
              ease: "easeInOut",
            }}
          />
          <p className="mt-4 text-sm text-gray-500">
            📍 That memorable day at SLC
          </p>
        </motion.div>

        {/* Story Part 3 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          On Monday, December 2, 2024, at 10:30 PM, I sent my first message. We had a brief chat that night, continued talking the next morning, and had our first phone call two days later. 9th Feb 2025 at 4:43 am I asked you to be my girl forever and now, we're on a journey toward forever.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
        >
          I need to read this out to you so you can see the expression and joy on my face as I am typing this hehehehe.
        </motion.p>

        <br></br>

        <button
  onClick={() => (window.location.href = '/timeline')}
  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
>
  Our Timeline
        </button>
        <button
  onClick={() => (window.location.href = '/')}
  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ml-5"
>
  Home
</button>
      </div>

      
    </main>
  );
}
