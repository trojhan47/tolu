/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function PerfumeExperience() {
  const [petals, setPetals] = useState([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setPetals(Array.from({ length: 10 }, (_, i) => i));
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const enableAudio = () => {
      if (!hasInteracted && audio) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(console.warn);
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
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-pink-50 px-4 py-16 flex items-center justify-center text-center overflow-hidden">
      {petals.map((_, index) => (
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

      <audio ref={audioRef} src="/music/perfume.mp3" loop />

      <div className="relative z-10 max-w-4xl bg-white bg-opacity-90 rounded-3xl shadow-xl p-10 space-y-10">
        <h1 className="text-5xl font-bold text-rose-700">The Fragrance of Tolu</h1>

        <p className="text-lg text-gray-700">
          Perfumes, like love, have the power to evoke emotions and create lasting memories. The
          essence of your being reminds me of the finest fragrances — each note a reflection of the
          qualities I admire most in you.
        </p>

        <section className="space-y-6">
          <h2 className="text-3xl text-rose-600">Top Notes</h2>
          <p className="text-lg text-gray-600">
            Upon first encounter, you're a symphony of <strong>Class, Grace, and Poise</strong>.
            Your <strong>Beauty</strong> arrests attention from across any room, like the first
            impression of a finely crafted perfume.
          </p>

          <h2 className="text-3xl text-rose-600">Heart Notes</h2>
          <p className="text-lg text-gray-600">
            As I got to know you, your <strong>Laughter</strong> became the melody that resonates
            with my soul. Your unwavering <strong>Grace</strong> and <strong>Class</strong> are like
            the heart notes of a perfume that keep unfolding with time. At your core lies a{' '}
            <strong>Deep Love</strong> that envelops everyone in warmth and affection.
          </p>

          <h2 className="text-3xl text-rose-600">Base Notes</h2>
          <p className="text-lg text-gray-600">
            The foundation of your being is built upon <strong>Loyalty, Kindness,</strong> and{' '}
            <strong>Peace</strong>. Yet it’s your <strong>Grit</strong> that adds depth, ensuring
            your presence remains unforgettable, just like the lingering trail of a cherished
            fragrance.
          </p>
        </section>

        <h3 className="text-2xl text-rose-700 mt-8">The Essence of You: A Fragrant Reflection</h3>
        <p className="text-lg text-gray-600">
          Your affinity for <strong>Lattafa Badee Al Oud</strong> mirrors your enigmatic allure. The
          rich oud and spice of the perfume capture the depth you embody.
          <strong>Calvin Klein’s Obsession</strong> reflects your passionate spirit, leaving an
          indelible mark on all who cross your path. And{' '}
          <strong>Jimmy Choo’s I Want Choo Forever</strong> resonates with your soft yet
          sophisticated nature, a scent that celebrates the vibrant energy you bring into every
          room.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <Image
            src="/lattafa.jpeg"
            alt="Lattafa"
            width={150}
            height={150}
            className="rounded-xl shadow-md"
          />
          <Image
            src="/clein.jpg"
            alt="CK Obsession"
            width={150}
            height={150}
            className="rounded-xl shadow-md"
          />
          <Image
            src="/choo.jpeg"
            alt="Jimmy Choo"
            width={150}
            height={150}
            className="rounded-xl shadow-md"
          />
        </div>

        <p className="text-lg text-gray-700 mt-8">
          As fragrances have the power to evoke memories and emotions, so does your presence in my
          life. You are the scent that lingers, the melody that plays on, and the essence I am
          forever drawn to.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={() => (window.location.href = '/gallery')}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full"
          >
            Visuals
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full"
          >
            Home
          </button>
        </div>

        <div className="mt-6">
          {!hasInteracted && (
            <p className="text-sm text-gray-500 italic animate-pulse">
              Click anywhere to start the music 🎵
            </p>
          )}
          <button
            onClick={toggleAudio}
            className="mt-2 text-sm bg-white border border-rose-400 text-rose-600 px-4 py-2 rounded-full hover:bg-rose-100 transition"
          >
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </button>
        </div>
      </div>
    </main>
  );
}
