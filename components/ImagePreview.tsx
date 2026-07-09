"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface ImagePreviewProps {
  image: string | null;
  onClose: () => void;
}

export default function ImagePreview({
  image,
  onClose,
}: ImagePreviewProps) {
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setScale(1);
  }, [image]);

  if (!mounted || !image) return null;

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  return createPortal(
  <div
    className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={onClose}
  >

    {/* POPUP CONTAINER */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        w-[85vw]
        h-[85vh]
        max-w-6xl
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#2D1B69]
        shadow-2xl
      "
    >

      {/* Header */}
      <div className="
        flex h-16 items-center justify-between
        border-b border-white/10
        bg-[#0B1220]/90
        px-6
      ">

        <h2 className="font-semibold text-white">
          Image Preview
        </h2>


        <div className="flex items-center gap-2">

          <button
            onClick={zoomOut}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ZoomOut size={18}/>
          </button>


          <button
            onClick={zoomIn}
            className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ZoomIn size={18}/>
          </button>


          <button
            onClick={() => setScale(1)}
            className="rounded-lg bg-white/10 px-3 py-2 text-white"
          >
            {Math.round(scale * 100)}%
          </button>


          <button
            onClick={onClose}
            className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <X size={18}/>
          </button>

        </div>

      </div>


      {/* Image Area */}
      <div
        onWheel={handleWheel}
        className="
          flex
          h-[calc(85vh-64px)]
          items-center
          justify-center
          overflow-auto
          p-8
        "
      >

        <Image
          src={image}
          alt="Preview"
          width={1200}
          height={800}
          draggable={false}
          style={{
            transform:`scale(${scale})`,
            transition:"transform .2s ease"
          }}
          className="
            max-h-full
            max-w-full
            rounded-xl
            object-contain
            shadow-2xl
          "
        />

      </div>


    </div>

  </div>,
  document.body
);
}