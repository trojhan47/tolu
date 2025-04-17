'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import galleryImages from "@/data/galleryImages";
import "@/app/globals.css";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [petals, setPetals] = useState([]);
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
const [uploadedImages, setUploadedImages] = useState([]);

  // Petal background generation
  useEffect(() => {
    setPetals(Array.from({ length: 10 }, (_, i) => i));
  }, []);

  // Autoplay workaround for music
  useEffect(() => {
    const audio = audioRef.current;
    const enableAudio = () => {
      if (audio && !hasInteracted) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => console.log("Autoplay blocked. Will play on user interaction."));
        setHasInteracted(true);
      }
    };

    window.addEventListener('click', enableAudio);
    window.addEventListener('touchstart', enableAudio);
    return () => {
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
    };
  }, [hasInteracted]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Hide hint after interaction
  useEffect(() => {
    const handleInteraction = () => setShowHint(false);
    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="bg-pink-50 min-h-screen py-16 px-6 relative overflow-hidden">
      {/* Petal background */}
      {petals.map((p, index) => (
        <Image
          key={index}
          src="/petal.png"
          alt="petal"
          width={40}
          height={40}
          className="absolute animate-float z-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animationDuration: `${8 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Background music */}
      <audio ref={audioRef} src="/music/perfect.mp4" loop volume="0.5" />

      <h1 className="text-4xl md:text-5xl font-bold text-center text-rose-700 mb-12">
        Captured Moments: A Visual Tale of Us
      </h1>

      {/* Upload Button */}
      <div className="flex flex-col items-center justify-center mb-10 space-y-4">
        <label className="cursor-pointer bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition duration-300">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setUploadedImages((prev) => [
                    ...prev,
                    { src: String(reader.result), caption: "New Memory 💖" },

                  ]);
                };
                reader.readAsDataURL(file);
              }
            }}
            className="hidden"
          />
        </label>
      </div>

      {/* Floating Romantic Photos */}
      {[...galleryImages].slice(0, 3).map((img, index) => (
        <motion.div
          key={`float-${index}`}
          className="absolute z-0 animate-float-img pointer-events-none"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            opacity: 0.2 + Math.random() * 0.3,
            width: '100px',
            height: '100px',
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Image
            src={img.src}
            alt={`floating-${index}`}
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </motion.div>
      ))}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto z-10 relative">
        {[...uploadedImages, ...galleryImages].map((img, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-xl group"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImg(img)}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={500}
              height={500}
              className="object-cover w-full h-64 sm:h-60 md:h-56 lg:h-64 xl:h-72 group-hover:brightness-75 transition-all duration-300 rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm bg-rose-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition">
              {img.caption}
            </div>
          </motion.div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={() => (window.location.href = '/promise')}
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          The Promise
        </button>
        <button
          onClick={() => (window.location.href = '/')}
          className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ml-5"
        >
          Home
        </button>
      </div>

      {/* Modal Preview */}
      {selectedImg && (
        <Modal image={selectedImg} onClose={() => setSelectedImg(null)} />
      )}

      {/* Music Hint */}
      {showHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full shadow-md text-sm z-50"
        >
          🎵 Click anywhere to begin the music...
        </motion.div>
      )}

      {/* Music Control Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 z-50"
      >
        {isPlaying ? 'Pause Music 🎵' : 'Play Music 🎶'}
      </button>
    </main>
  );
}
