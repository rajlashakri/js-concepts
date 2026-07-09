"use client";

import { useState } from "react";
import { ChevronRight, Terminal } from "lucide-react";
import ImagePreview from "@/components/ImagePreview";

interface ConceptHeaderProps {
  topic: string;
  description: string;
  fileName: string;
  diagramImage?: string;
}

export default function ConceptHeader({
  topic,
  description,
  fileName,
  diagramImage,
}: ConceptHeaderProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <>
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-md bg-[#111823] border border-[#243042] border-b-0 font-mono text-xs text-[#7d8b9c]">
          <Terminal size={13} className="text-[#e8b13a]" />
          {fileName}
        </div>
        <div
          className={
            diagramImage
              ? "relative rounded-b-md rounded-tr-md border border-[#243042] bg-[#111823] px-6 py-8"
              : "rounded-b-md rounded-tr-md border border-[#243042] bg-[#111823] px-6 py-8"
          }
        >
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#f2f5f8] tracking-tight">
            {topic}
          </h1>

          <p className="mt-3 text-[#8b949e] text-base">{description}</p>

          {diagramImage && (
            <button
              onClick={() => setPreviewImage(diagramImage)}
              className="
                    absolute
                    right-6
                    top-20
                    flex
                    items-center
                    gap-2
                    rounded-md
                    border
                    border-[#243042]
                    bg-[#111823]
                    px-3
                    py-2
                    text-[#e8b13a]
                    hover:bg-[#1a2332]
                    transition-colors
                "
            >
              <ChevronRight size={18} />
              View Diagram
            </button>
          )}
        </div>
      </div>
      {diagramImage && (
        <ImagePreview
          image={previewImage}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </>
  );
}
