'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from "react";
export default function LoveTimeline() {
   const [petals, setPetals] = useState([]);
    
    
      // Create 10 petals on load
      useEffect(() => {
        setPetals(Array.from({ length: 10 }, (_, i) => i));
      }, []);
  const milestones = [
    {
      date: "February 2020",
      title: "First Glimpse at SLC Church",
      description: "The first moment I saw you, and I knew it was destiny.",
      image: "/glimpse.jpg"
    },
    {
      date: "November 28, 2024",
      title: "Reconnection After Years",
      description: "Through a throwback photo, we finally reconnected after 5 years.",
      image: "/connect.jpg"
    },
    {
      date: "December 2, 2024",
      title: "First Message Sent",
      description: "I finally decided to send that first message.",
      image: "/first.jpg"
    },
    {
      date: "December 4, 2024",
      title: "First Phone Call",
      description: "We had our first voice conversation.",
      image: "/first.jpg"
    },
    {
      date: "February 9, 2025",
      title: "Forever My Girl",
      description: "I asked you to be my girl forever, marking the beginning of our journey.",
      image: "/forever.jpg"
    },
    {
      date: "April 18, 2025",
      title: "Finally, in-person",
      description: " We finally met in person consciously.",
      image: "/forever.jpg"
    },
    {
      date: "April 18, 2025",
      title: "First Date",
      description: " We had our first date.",
      image: "/forever.jpg"
    }
  ];

  return (
    <main className="bg-white text-gray-800 px-4 py-16">
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
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-rose-600 text-center"
        >
          Timeline of Our Love
        </motion.h1>

        {/* Timeline Content */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-between bg-rose-50 p-4 rounded-lg shadow-lg"
            >
              {/* Milestone Image */}
              <motion.img
                src={milestone.image}
                alt={milestone.title}
                className="w-full sm:w-[200px] h-[200px] object-cover rounded-lg"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                viewport={{ once: true }}
              />

              <div className="sm:ml-8 mt-4 sm:mt-0">
                {/* Date */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-rose-600"
                >
                  {milestone.date}
                </motion.h3>
                {/* Title */}
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold mt-2"
                >
                  {milestone.title}
                </motion.h4>
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  className="text-base mt-2 text-gray-600"
                >
                  {milestone.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        <button
  onClick={() => (window.location.href = '/perfume-experience')}
  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
>
  Fragrance
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
