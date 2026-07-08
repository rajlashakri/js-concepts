"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ContinueButtonProps {
  category?: string;
  nextTopicSlug?: string;
  nextTopicTitle: string;
}

const getTopicSlug = (topic: string) =>
  topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ContinueButton({
  category = "javascript",
  nextTopicSlug,
  nextTopicTitle,
}: ContinueButtonProps) {
  const router = useRouter();
  const slug = nextTopicSlug || getTopicSlug(nextTopicTitle);

  return (
    <button
      type="button"
      onClick={() => router.push(`/learn/${category}/${slug}`)}
      className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#e8b13a] text-[#0b0f14] font-medium text-sm hover:bg-[#f0bc4c] transition-colors"
    >
      Continue
      <ArrowRight size={15} />
    </button>
  );
}
