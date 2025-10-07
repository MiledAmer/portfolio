"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
}

export default function ImageModal({
  src,
  alt,
  className = "object-contain",
  quality = 90,
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="relative my-6 h-48 w-full cursor-pointer transition-opacity hover:opacity-90 sm:h-64 md:h-96"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label="Click to open full size image"
      >
        <Image
          alt={alt}
          loading="lazy"
          src={src}
          fill
          className={className}
          quality={quality}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              handleClose();
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              alt={alt}
              src={src}
              width={2000}
              height={2000}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
