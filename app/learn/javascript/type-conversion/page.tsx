"use client";

import { useState } from "react";
import {
  AlertTriangle, ArrowLeft, Check, CheckCircle2, Copy, HelpCircle, Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";
import ConceptHeader from "@/components/ConceptHeader";

const TOPIC = {
  topic: "Type Conversion",
  description:
    "Learn how JavaScript changes values from one data type to another, both automatically and manually.",
  englishExplanation:
    "Type conversion means changing a value from one type to another, like string to number or boolean to string. JavaScript can do this implicitly during operations, or you can do it explicitly with helpers like Number(), String(), and Boolean().",
  babaKiBhashaExplanation:
    "Type conversion ka matlab hai value ko ek type se doosre type mein badalna, jaise string se number ya boolean se string. JavaScript kabhi-kabhi operations ke time ye kaam khud kar deta hai, aur kabhi tum Number(), String(), Boolean() jaise helpers se manually karte ho.",
  babaKiBhashaBasicExample: `const age = "25";\nconsole.log(Number(age)); // 25\nconsole.log(typeof Number(age)); // "number"`,
  babaKiBhashaMediumExample: `console.log("5" + 2); // "52" - number string ban gaya\nconsole.log("5" - 2); // 3 - string number ban gayi\nconsole.log(Boolean("hello")); // true\nconsole.log(Boolean("")); // false`,
  babaKiBhashaAdvancedExample: `const input = "42px";\n\nconsole.log(Number(input)); // NaN\nconsole.log(parseInt(input)); // 42\n\nconst price = "99.50";\nconsole.log(Number(price)); // 99.5`,
  whyExists:
    "Type conversion exists because JavaScript is dynamically typed. Values often come from forms, APIs, URLs, or storage as strings, but your program may need numbers, booleans, or other types to do real work.",
  babaKiBhashaWhyExists:
    "Type conversion isliye exist karta hai kyunki JavaScript dynamically typed hai. Values forms, APIs, URLs, ya storage se aksar strings ke form mein aati hain, lekin program ko kaam karne ke liye numbers, booleans, ya doosre types chahiye hote hain.",
  realLifeExample:
    "It's like reading a price written on paper. The text '500' is just writing until you treat it as an actual amount of money and calculate with it.",
  babaKiBhashaRealLifeExample:
    "Isko price paper pe likhe hone jaisa samjho. Text '500' bas likha hua text hai, jab tak tum usse actual amount maan ke calculation nahi karte.",
  syntax:
    'Number("123");\nString(123);\nBoolean("hello");\nparseInt("42px");\nparseFloat("9.99");',
  babaKiBhashaSyntax:
    'Number("123");\nString(123);\nBoolean("hello");\nparseInt("42px");\nparseFloat("9.99");',
  basicExample: `const count = "10";\nconst total = Number(count) + 5;\nconsole.log(total);\nconsole.log(typeof total);`,
  mediumExample: `console.log("10" + 5);\nconsole.log("10" - 5);\nconsole.log(true + 1);\nconsole.log(false + 1);`,
  advancedExample: `const value = "20 items";\nconst exactNumber = Number(value);\nconst startingNumber = parseInt(value);\n\nconsole.log(exactNumber);\nconsole.log(startingNumber);`,
  dryRun:
    "Number('20 items') tries to convert the whole string into a valid number. Because the text contains non-number characters, the result is NaN. parseInt('20 items') reads from the start, takes the numeric part 20, and stops when it reaches text.",
  babaKiBhashaDryRun:
    "Number('20 items') poori string ko valid number mein convert karne ki koshish karta hai. Kyunki text mein non-number characters hain, result NaN hota hai. parseInt('20 items') start se read karta hai, numeric part 20 leta hai, aur text aate hi ruk jaata hai.",
  output: "NaN\\n20",
  whyOutput:
    "Number() is strict about the whole value being numeric, while parseInt() extracts an integer from the beginning of the string when possible.",
  babaKiBhashaWhyOutput:
    "Number() strict hota hai ki poori value numeric honi chahiye, jabki parseInt() possible ho toh string ke start se integer extract kar leta hai.",
  commonMistakes:
    "Expecting + to always add numbers even when one side is a string, forgetting that Number('') becomes 0, and treating NaN as equal to itself instead of checking with Number.isNaN().",
  babaKiBhashaCommonMistakes:
    "+ operator ko hamesha number addition samajhna jabki ek side string ho sakti hai, yeh bhool jaana ki Number('') 0 ban jaata hai, aur NaN ko normal equality se check karna instead of Number.isNaN().",
  bestPractices:
    "Convert user input explicitly before calculations, prefer Number() when the whole value must be numeric, use parseInt/parseFloat only when extracting numbers from mixed text is intentional, and avoid relying on clever implicit conversion.",
  babaKiBhashaBestPractices:
    "Calculations se pehle user input ko explicitly convert karo, jab poori value numeric honi chahiye tab Number() prefer karo, parseInt/parseFloat tabhi use karo jab mixed text se number extract karna intentional ho, aur clever implicit conversion pe rely mat karo.",
  interviewQuestions:
    "What is the difference between implicit and explicit type conversion, and why does '5' + 2 produce '52' while '5' - 2 produces 3?",
  babaKiBhashaInterviewQuestions:
    "Implicit aur explicit type conversion mein kya difference hai, aur '5' + 2 se '52' kyun aata hai jabki '5' - 2 se 3 kyun aata hai?",
  summary:
    "Type conversion changes values between types; explicit conversion is clearer and safer, while implicit conversion can be useful but often causes surprising JavaScript outputs.",
  babaKiBhashaSummary:
    "Type conversion values ko types ke beech change karta hai; explicit conversion zyada clear aur safe hota hai, jabki implicit conversion useful ho sakta hai lekin aksar surprising JavaScript outputs deta hai.",
  nextTopicSlug: "operators",
  nextTopicTitle: "Operators",
};

function CodeBlock({ code, label }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-[#243042] bg-[#0b0f14]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#111823] border-b border-[#243042]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e5533c]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e8b13a]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3ec988]" />
          {label && (
            <span className="ml-2 text-xs font-mono text-[#7d8b9c]">{label}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs font-mono text-[#7d8b9c] hover:text-[#e8b13a] transition-colors"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-[#d7dee7]">{code}</code>
      </pre>
    </div>
  );
}

function Section({ index, title, children }: any) {
  return (
    <section className="relative pl-14 pb-10">
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <span className="w-9 h-9 rounded-md bg-[#111823] border border-[#243042] flex items-center justify-center font-mono text-xs text-[#e8b13a]">
          {index}
        </span>
        <span className="flex-1 w-px bg-[#243042] mt-2" />
      </div>
      <h2 className="text-lg font-semibold text-[#e9edf2] mb-3 tracking-tight">
        {title}
      </h2>
      <div className="text-[15px] text-[#aeb9c4] leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function TypeConversionPage({ props }: any) {
  const t = { ...TOPIC, ...props };
  const [activeTab, setActiveTab] = useState<"english" | "babaKiBhasha">("english");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#d7dee7] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-14">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-sm font-mono text-[#7d8b9c] hover:text-[#e8b13a] transition-colors"
        >
          <ArrowLeft size={15} />
          Back
        </button>

        <ConceptHeader
          topic={t.topic}
          description={t.description}
          fileName="learn/type-conversion.js"
        />

        <div className="mb-12 rounded-lg border border-[#243042] bg-[#111823] overflow-hidden">
          <div className="flex border-b border-[#243042]">
            <button
              onClick={() => setActiveTab("english")}
              className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-colors ${activeTab === "english"
                  ? "text-[#e8b13a] border-b-2 border-[#e8b13a] bg-[#0b0f14]"
                  : "text-[#7d8b9c] hover:text-[#c9d1d9]"
                }`}
            >
              English
            </button>
            <button
              onClick={() => setActiveTab("babaKiBhasha")}
              className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-colors ${activeTab === "babaKiBhasha"
                  ? "text-[#3ec988] border-b-2 border-[#3ec988] bg-[#0b0f14]"
                  : "text-[#7d8b9c] hover:text-[#c9d1d9]"
                }`}
            >
              Baba ki Bhasha
            </button>
          </div>
          <div className="p-5">
            <p className="text-[15px] text-[#c9d1d9] leading-relaxed">
              {activeTab === "english" ? t.englishExplanation : t.babaKiBhashaExplanation}
            </p>
          </div>
        </div>

        <div>
          <Section index="01" title="Why this exists">
            <p className="flex gap-2">
              <Lightbulb size={16} className="text-[#e8b13a] shrink-0 mt-1" />
              <span>{activeTab === "english" ? t.whyExists : t.babaKiBhashaWhyExists}</span>
            </p>
          </Section>

          <Section index="02" title="Real-life analogy">
            <p>{activeTab === "english" ? t.realLifeExample : t.babaKiBhashaRealLifeExample}</p>
          </Section>

          {t.syntax && (
            <Section index="03" title="Syntax">
              <CodeBlock
                code={activeTab === "english" ? t.syntax : t.babaKiBhashaSyntax}
                label="syntax"
              />
            </Section>
          )}

          <Section index="04" title="Basic example">
            <CodeBlock
              code={activeTab === "english" ? t.basicExample : t.babaKiBhashaBasicExample}
              label="basic.js"
            />
          </Section>

          <Section index="05" title="Medium example">
            <CodeBlock
              code={activeTab === "english" ? t.mediumExample : t.babaKiBhashaMediumExample}
              label="medium.js"
            />
          </Section>

          <Section index="06" title="Advanced example">
            <CodeBlock
              code={activeTab === "english" ? t.advancedExample : t.babaKiBhashaAdvancedExample}
              label="advanced.js"
            />
          </Section>

          <Section index="07" title="Dry run">
            <p>{activeTab === "english" ? t.dryRun : t.babaKiBhashaDryRun}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs font-mono text-[#7d8b9c]">Output</span>
              <span className="px-3 py-1 rounded-md bg-[#0b0f14] border border-[#3ec988]/40 font-mono text-sm text-[#3ec988] whitespace-pre-line">
                {t.output}
              </span>
            </div>
            <p className="mt-2 text-[#8b949e] text-sm">
              {activeTab === "english" ? t.whyOutput : t.babaKiBhashaWhyOutput}
            </p>
          </Section>

          <Section index="08" title="Common mistakes">
            <p className="flex gap-2">
              <AlertTriangle size={16} className="text-[#e5533c] shrink-0 mt-1" />
              <span>{activeTab === "english" ? t.commonMistakes : t.babaKiBhashaCommonMistakes}</span>
            </p>
          </Section>

          <Section index="09" title="Best practices">
            <p className="flex gap-2">
              <CheckCircle2 size={16} className="text-[#3ec988] shrink-0 mt-1" />
              <span>{activeTab === "english" ? t.bestPractices : t.babaKiBhashaBestPractices}</span>
            </p>
          </Section>

          <Section index="10" title="Interview question">
            <p className="flex gap-2">
              <HelpCircle size={16} className="text-[#e8b13a] shrink-0 mt-1" />
              <span>
                {activeTab === "english" ? t.interviewQuestions : t.babaKiBhashaInterviewQuestions}
              </span>
            </p>
          </Section>

          <Section index="11" title="Summary">
            <p className="text-[#c9d1d9]">
              {activeTab === "english" ? t.summary : t.babaKiBhashaSummary}
            </p>
          </Section>
        </div>

        {t.nextTopicTitle && (
          <div className="mt-4 flex items-center justify-between rounded-lg border border-[#243042] bg-[#111823] px-6 py-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7d8b9c]">
                Next up
              </span>
              <p className="mt-1 text-[#e9edf2] font-medium">{t.nextTopicTitle}</p>
            </div>
            <ContinueButton
              nextTopicSlug={t.nextTopicSlug}
              nextTopicTitle={t.nextTopicTitle}
            />
          </div>
        )}
      </div>
    </div>
  );
}
