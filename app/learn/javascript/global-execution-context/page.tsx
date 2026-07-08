"use client";

import { useState } from "react";
import { Terminal, ChevronRight, Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TOPIC = {
  topic: "Global Execution Context",
  description: "Learn what the Global Execution Context is and what happens the moment your script starts running.",
  englishExplanation:
    "The Global Execution Context (GEC) is the base environment JavaScript creates the moment a file starts running — before any function is called. It sets up the global object (window in browsers, global in Node), creates the 'this' keyword at the top level, and does an initial pass to allocate memory for variables and functions.",
  babaKiBhashaExplanation:
    "Global Execution Context (GEC) woh sabse pehla environment hai jo JavaScript banata hai jab file run hona shuru hoti hai — kisi bhi function ke call hone se pehle. Isme global object banta hai (browser mein window, Node mein global), top level pe 'this' set hota hai, aur variables/functions ke liye memory pehle se allocate ho jaati hai.",
  babaKiBhashaBasicExample: `console.log(this); // top level pe 'this' global object ko point karta hai\nvar naam = "Aditi"; // yeh global scope mein create hua`,
  babaKiBhashaMediumExample: `console.log(x); // undefined aayega, error nahi\nvar x = 10; // hoisting ki wajah se yeh chalta hai\n\nfunction sayHi() {\n  console.log("Hi!"); // yeh function bhi memory phase mein hi register ho gaya tha\n}\nsayHi();`,
  babaKiBhashaAdvancedExample: `console.log(typeof greet); // "function" — poora function hoist hota hai\nconsole.log(typeof value); // "undefined" — sirf declaration hoist hoti hai\n\nvar value = 5;\nfunction greet() {\n  console.log("namaste");\n}\n// Yeh dikhata hai ki GEC ke memory phase mein function aur var alag treat hote hain`,
  whyExists:
    "It exists because JavaScript needs somewhere to put top-level code and variables before any function runs — without a base context, there'd be nowhere for global state or the initial 'this' to live.",
  babaKiBhashaWhyExists:
    "Yeh isliye zaroori hai kyunki JavaScript ko kisi function ke chalne se pehle top-level code aur variables ko kahin rakhna hota hai — agar base context na ho toh global state aur shuruwati 'this' kahin exist hi nahi karenge.",
  realLifeExample:
    "Think of it as the foundation of a building being laid before any rooms (functions) are built — the foundation (GEC) exists first, and every room is constructed on top of it.",
  babaKiBhashaRealLifeExample:
    "Isko building ki foundation samjho jo kisi bhi room (function) ke banne se pehle daali jaati hai — foundation (GEC) pehle se maujood hoti hai, aur har room usi ke upar banta hai.",
  syntax: "// Created automatically — there's no keyword to trigger it\n// It exists the instant your script starts executing",
  babaKiBhashaSyntax: "// Yeh automatically create hota hai — koi keyword iske liye nahi hai\n// Script ke chalna shuru hote hi yeh exist karne lagta hai",
  basicExample: `console.log(this);\nvar name = "Aditi";`,
  mediumExample: `console.log(x);\nvar x = 10;\n\nfunction sayHi() {\n  console.log("Hi!");\n}\nsayHi();`,
  advancedExample: `console.log(typeof greet);\nconsole.log(typeof value);\n\nvar value = 5;\nfunction greet() {\n  console.log("hello");\n}`,
  dryRun:
    "JavaScript runs two phases inside the GEC: a memory creation phase, where it scans the code and allocates space for every var (set to undefined) and every function (stored in full), then the execution phase, where code actually runs line by line.",
  babaKiBhashaDryRun:
    "JavaScript GEC ke andar do phase chalata hai: memory creation phase, jahan code scan karke har var ke liye space allocate hota hai (undefined set hota hai) aur har function poora store ho jaata hai, uske baad execution phase, jahan code line by line actually chalta hai.",
  output: "function \\ undefined",
  whyOutput:
    "Functions are hoisted with their entire body, so typeof greet is already \"function\" before the definition line runs. var is hoisted as a name only, so typeof value is \"undefined\" until the assignment line executes.",
  babaKiBhashaWhyOutput:
    "Functions apni poori body ke saath hoist hote hain, isliye typeof greet definition line se pehle hi \"function\" hota hai. var sirf naam ke roop mein hoist hota hai, isliye typeof value tab tak \"undefined\" rehta hai jab tak assignment line chal nahi jaati.",
  commonMistakes:
    "Assuming var behaves like let/const during hoisting, and forgetting that there is only ever one Global Execution Context per program — it's created once, not per function call.",
  babaKiBhashaCommonMistakes:
    "Yeh sochna ki var, hoisting ke time let/const jaisa behave karta hai, aur yeh bhool jaana ki poore program mein sirf ek hi Global Execution Context hota hai — yeh ek baar banta hai, har function call pe nahi.",
  bestPractices:
    "Avoid relying on hoisting — declare variables with let/const near where you use them, and declare functions before you call them for readability even though hoisting would technically allow otherwise.",
  babaKiBhashaBestPractices:
    "Hoisting pe bharosa mat karo — variables ko let/const se wahin declare karo jahan use karne wale ho, aur functions ko call karne se pehle hi declare karo, readability ke liye, chahe hoisting technically allow karta ho.",
  interviewQuestions:
    "What gets created during the Global Execution Context's memory phase, and how does that differ between var declarations and function declarations?",
  babaKiBhashaInterviewQuestions:
    "Global Execution Context ke memory phase mein kya create hota hai, aur var declarations aur function declarations mein yeh kaise alag hota hai?",
  summary:
    "The Global Execution Context is the first environment JavaScript sets up, giving you the global object, top-level 'this', and hoisted variables/functions before any code actually executes.",
  babaKiBhashaSummary:
    "Global Execution Context woh pehla environment hai jo JavaScript set up karta hai, jisme global object, top-level 'this', aur hoisted variables/functions milte hain — yeh sab actual code chalne se pehle hi ready hote hain.",
  nextTopicSlug: "call-stack",
  nextTopicTitle: "Call Stack",
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

export default function GlobalExecutionContextPage({ props }: any) {
  const t = { ...TOPIC, ...props };
  const [activeTab, setActiveTab] = useState<"english" | "babaKiBhasha">("english");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#d7dee7] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-sm font-mono text-[#7d8b9c] hover:text-[#e8b13a] transition-colors"
        >
          <ArrowLeft size={15} />
          Back
        </button>

        {/* Header - editor tab style */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-md bg-[#111823] border border-[#243042] border-b-0 font-mono text-xs text-[#7d8b9c]">
            <Terminal size={13} className="text-[#e8b13a]" />
            learn/global-execution-context.js
          </div>
          <div className="rounded-b-md rounded-tr-md border border-[#243042] bg-[#111823] px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-[#f2f5f8] tracking-tight">
              {t.topic}
            </h1>
            <p className="mt-3 text-[#8b949e] text-base">{t.description}</p>
          </div>
        </div>

        {/* Explanation block - tabbed */}
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

        {/* Numbered sections */}
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

        {/* Next topic */}
        {t.nextTopicTitle && (
          <div className="mt-4 flex items-center justify-between rounded-lg border border-[#243042] bg-[#111823] px-6 py-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7d8b9c]">
                Next up
              </span>
              <p className="mt-1 text-[#e9edf2] font-medium">{t.nextTopicTitle}</p>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#e8b13a] text-[#0b0f14] font-medium text-sm hover:bg-[#f0bc4c] transition-colors">
              Continue
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}