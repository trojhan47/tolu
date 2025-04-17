'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ image, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-3xl w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-rose-600 hover:bg-rose-700 p-2 rounded-full z-10"
          >
            <X size={24} />
          </button>

          <Image
            src={image.src}
            alt={image.caption}
            width={1200}
            height={800}
            className="rounded-xl w-full object-contain max-h-[80vh]"
          />
          <p className="text-center text-white mt-4 text-sm">
            {image.caption}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
