"use client";

import { useState } from "react";
import { Terminal, ChevronRight, Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";

const TOPIC = {
  topic: "Hoisting",
  description: "Learn why some variables and functions seem to be usable before they're declared.",
  englishExplanation:
    "Hoisting is the result of JavaScript's memory creation phase: before any code runs, the engine scans the current scope and reserves space for var declarations (set to undefined) and function declarations (stored with their full body). It looks like declarations 'moved to the top', but nothing physically moves — the engine just processes them early.",
  babaKiBhashaExplanation:
    "Hoisting JavaScript ke memory creation phase ka result hai: kisi bhi code ke chalne se pehle, engine current scope scan karta hai aur var declarations ke liye space reserve karta hai (undefined set karke) aur function declarations ko unki poori body ke saath store kar leta hai. Aisa lagta hai jaise declarations 'upar move' ho gaye, lekin actually kuch move nahi hota — engine bas unhe pehle process kar leta hai.",
  babaKiBhashaBasicExample: `console.log(a); // undefined — 'a' hoist ho gaya, value nahi\nvar a = 5;`,
  babaKiBhashaMediumExample: `sayHi(); // "Hi!" — function declaration poori tarah hoist hoti hai\n\nfunction sayHi() {\n  console.log("Hi!");\n}`,
  babaKiBhashaAdvancedExample: `console.log(typeof num); // "undefined"\nconsole.log(typeof greetFn); // "function"\n\nvar num = 10;\nfunction greetFn() {\n  console.log("namaste");\n}\n\n// greet(); // yeh line error degi agar uncomment ki, kyunki greet ek function expression hai\nvar greet = function () {\n  console.log("hi");\n};`,
  whyExists:
    "Hoisting exists as a side effect of how the engine builds the execution context in two phases — it isn't a feature you 'use' on purpose, but understanding it prevents confusing bugs around variable and function order.",
  babaKiBhashaWhyExists:
    "Hoisting engine ke do phases mein execution context banane ka ek side effect hai — yeh koi feature nahi hai jise tum jaanbhoojh kar 'use' karte ho, lekin ise samajhna variable aur function order ke around confusing bugs se bachata hai.",
  realLifeExample:
    "It's like a venue reserving seats with name cards before the event starts (memory phase) — the seat exists and has your name on it, but you can't actually sit and use it (get the real value) until you physically arrive (execution phase).",
  babaKiBhashaRealLifeExample:
    "Isko aisa samjho jaise event shuru hone se pehle venue name cards ke saath seats reserve kar deta hai (memory phase) — seat exist karti hai aur uspe naam bhi hai, lekin tum us seat ko actually use nahi kar sakte (real value nahi mil sakti) jab tak tum physically pahuncho (execution phase).",
  syntax: "// var and function declarations are hoisted\n// let/const are hoisted too, but stay in the Temporal Dead Zone until declared",
  babaKiBhashaSyntax: "// var aur function declarations hoist hote hain\n// let/const bhi hoist hote hain, lekin declare hone tak Temporal Dead Zone mein rehte hain",
  basicExample: `console.log(a);\nvar a = 5;`,
  mediumExample: `sayHi();\n\nfunction sayHi() {\n  console.log("Hi!");\n}`,
  advancedExample: `console.log(typeof num);\nconsole.log(typeof greetFn);\n\nvar num = 10;\nfunction greetFn() {\n  console.log("hello");\n}\n\nvar greet = function () {\n  console.log("hi");\n};`,
  dryRun:
    "During the memory phase, num is reserved and set to undefined, and greetFn is stored as a full function. During execution, the two typeof checks run before the var num = 10 line, so num still reads as undefined while greetFn is already callable.",
  babaKiBhashaDryRun:
    "Memory phase mein, num reserve hota hai aur undefined set hota hai, aur greetFn poore function ke roop mein store hota hai. Execution ke time, dono typeof checks var num = 10 line se pehle chalte hain, isliye num abhi bhi undefined hi read hota hai jabki greetFn already callable hai.",
  output: "undefined\\nfunction",
  whyOutput:
    "Only the name of a var is hoisted, not its assigned value, so typeof num is 'undefined' at that point. Function declarations hoist with their entire definition, so typeof greetFn is already 'function'.",
  babaKiBhashaWhyOutput:
    "var ka sirf naam hoist hota hai, uski assigned value nahi, isliye us point pe typeof num 'undefined' hai. Function declarations apni poori definition ke saath hoist hote hain, isliye typeof greetFn already 'function' hai.",
  commonMistakes:
    "Thinking a variable declared with var has its value available before the assignment line runs, and trying to call a function stored in a var/let/const before that line executes (function expressions and arrow functions are not hoisted like function declarations).",
  babaKiBhashaCommonMistakes:
    "Yeh sochna ki var se declare kiya variable, assignment line chalne se pehle bhi apni value deta hai, aur var/let/const mein store kiye function ko us line ke execute hone se pehle call karne ki koshish karna (function expressions aur arrow functions, function declarations jaisa hoist nahi hote).",
  bestPractices:
    "Declare variables and functions before using them regardless of hoisting rules — write code in the order it actually needs to run so readers don't have to think about hoisting at all.",
  babaKiBhashaBestPractices:
    "Hoisting rules chahe jo bhi ho, variables aur functions ko use karne se pehle hi declare karo — code ko us order mein likho jisme woh actually chalna chahiye, taaki reader ko hoisting ke baare mein sochna hi na pade.",
  interviewQuestions:
    "Why does console.log(typeof someVar) print 'undefined' instead of throwing an error when someVar is declared with var later in the same scope?",
  babaKiBhashaInterviewQuestions:
    "console.log(typeof someVar) error kyun nahi deta aur 'undefined' print karta hai, jab someVar usi scope mein baad mein var se declare hua ho?",
  summary:
    "Hoisting means variable and function declarations are processed during the memory creation phase, before code executes — var gets set to undefined, functions get their full body, and let/const remain inaccessible until their declaration line.",
  babaKiBhashaSummary:
    "Hoisting ka matlab hai ki variable aur function declarations memory creation phase ke dauraan process hote hain, code chalne se pehle — var undefined set hota hai, functions ko unki poori body milti hai, aur let/const apni declaration line tak inaccessible rehte hain.",
  nextTopicSlug: "temporal-dead-zone-tdz",
  nextTopicTitle: "Temporal Dead Zone (TDZ)",
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

export default function HoistingPage({ props }: any) {
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

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-md bg-[#111823] border border-[#243042] border-b-0 font-mono text-xs text-[#7d8b9c]">
            <Terminal size={13} className="text-[#e8b13a]" />
            learn/hoisting.js
          </div>
          <div className="rounded-b-md rounded-tr-md border border-[#243042] bg-[#111823] px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#f2f5f8] tracking-tight">
              {t.topic}
            </h1>
            <p className="mt-3 text-[#8b949e] text-base">{t.description}</p>
          </div>
        </div>

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
