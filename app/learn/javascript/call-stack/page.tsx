"use client";

import { useState } from "react";
import { Terminal, ChevronRight, Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";

const TOPIC = {
  topic: "Call Stack",
  description: "Learn how JavaScript keeps track of which function is currently running.",
  englishExplanation:
    "The Call Stack is a LIFO (Last In, First Out) structure JavaScript uses to track execution contexts. The Global Execution Context sits at the bottom; every function call pushes a new Function Execution Context on top, and it's popped off the moment that function returns.",
  babaKiBhashaExplanation:
    "Call Stack ek LIFO (Last In, First Out) structure hai jisse JavaScript execution contexts track karta hai. Global Execution Context sabse neeche hota hai; har function call ek naya Function Execution Context upar push karta hai, aur function return hote hi woh pop ho jaata hai.",
  babaKiBhashaBasicExample: `function one() {\n  console.log("ek"); // 'one' ka FEC stack pe hai\n}\none(); // push -> run -> pop`,
  babaKiBhashaMediumExample: `function a() {\n  b(); // a ke FEC ke upar b ka FEC push hota hai\n}\nfunction b() {\n  console.log("b chal raha hai"); // yahan stack: [GEC, a, b]\n}\na();`,
  babaKiBhashaAdvancedExample: `function countdown(n) {\n  if (n <= 0) {\n    console.log("khatam!"); // base case, ab pop hona shuru hoga\n    return;\n  }\n  console.log(n);\n  countdown(n - 1); // har call stack pe naya FEC daalta hai\n}\ncountdown(3); // stack: [GEC, countdown(3), countdown(2), countdown(1), countdown(0)]`,
  whyExists:
    "It exists so JavaScript always knows exactly which function to return to once the current one finishes — without it, nested and recursive calls would have no way of resuming the right caller.",
  babaKiBhashaWhyExists:
    "Yeh isliye zaroori hai taaki JavaScript ko hamesha pata rahe ki current function khatam hone ke baad kis function pe wapas jaana hai — iske bina nested aur recursive calls ko sahi caller pe resume karne ka koi tareeka nahi hota.",
  realLifeExample:
    "Think of a stack of plates: you can only add or remove from the top. When function A calls function B, B's plate goes on top of A's; B has to be cleared away before A can be picked back up.",
  babaKiBhashaRealLifeExample:
    "Plates ke stack jaisa samjho: tum sirf upar se plate daal ya nikaal sakte ho. Jab function A, function B ko call karta hai, toh B ki plate A ke upar rakhi jaati hai; B hatne ke baad hi A ko wapas uthaya ja sakta hai.",
  syntax: "// No special syntax — every function call automatically uses the stack\nfunctionName();",
  babaKiBhashaSyntax: "// Koi special syntax nahi hai — har function call automatically stack use karta hai\nfunctionName();",
  basicExample: `function one() {\n  console.log("one");\n}\none();`,
  mediumExample: `function a() {\n  b();\n}\nfunction b() {\n  console.log("b is running");\n}\na();`,
  advancedExample: `function countdown(n) {\n  if (n <= 0) {\n    console.log("done!");\n    return;\n  }\n  console.log(n);\n  countdown(n - 1);\n}\ncountdown(3);`,
  dryRun:
    "countdown(3) is pushed and logs 3, then calls countdown(2), pushing it on top; this repeats down to countdown(0), which logs 'done!' and returns. Each return pops that call off, unwinding the stack back down to countdown(3), which then also returns.",
  babaKiBhashaDryRun:
    "countdown(3) push hota hai aur 3 log karta hai, fir countdown(2) ko call karta hai, jo upar push hota hai; yeh countdown(0) tak repeat hota hai, jo 'done!' log karke return karta hai. Har return us call ko pop kar deta hai, stack unwind hoke countdown(3) tak wapas aata hai, jo woh bhi return karta hai.",
  output: "3\\n2\\n1\\ndone!",
  whyOutput:
    "Each call logs its number before recursing deeper, so the numbers print in descending order as the stack grows, and 'done!' only appears once the base case (n <= 0) is reached at the top of the stack.",
  babaKiBhashaWhyOutput:
    "Har call apna number log karta hai deeper recurse hone se pehle, isliye numbers descending order mein print hote hain jaise-jaise stack badhta hai, aur 'done!' sirf tab aata hai jab base case (n <= 0) stack ke top pe pahunchta hai.",
  commonMistakes:
    "Writing recursion without a proper base case, which keeps pushing new frames until you hit 'Maximum call stack size exceeded', and confusing the call stack (execution tracking) with the heap (where objects are stored).",
  babaKiBhashaCommonMistakes:
    "Recursion likhte waqt proper base case na dena, jiski wajah se naye frames push hote rehte hain jab tak 'Maximum call stack size exceeded' error na aaye, aur call stack (execution tracking) ko heap (jahan objects store hote hain) se confuse karna.",
  bestPractices:
    "Always give recursive functions a clear base case, keep recursion depth reasonable or convert to an iterative loop for deep operations, and use browser/Node dev tools' call stack panel when debugging to see the exact chain of calls.",
  babaKiBhashaBestPractices:
    "Recursive functions ko hamesha clear base case do, recursion depth reasonable rakho ya deep operations ke liye iterative loop mein convert karo, aur debugging ke time browser/Node dev tools ke call stack panel ka use karo taaki calls ki exact chain dikhe.",
  interviewQuestions:
    "What causes a 'Maximum call stack size exceeded' error, and how would you fix a function that triggers it?",
  babaKiBhashaInterviewQuestions:
    "'Maximum call stack size exceeded' error kis wajah se aata hai, aur jo function isse trigger karta hai use kaise fix karoge?",
  summary:
    "The Call Stack tracks which execution context is currently active using a last-in-first-out order, pushing a new frame on every call and popping it off on every return.",
  babaKiBhashaSummary:
    "Call Stack yeh track karta hai ki currently kaunsa execution context active hai, last-in-first-out order use karke — har call pe ek naya frame push hota hai aur har return pe woh pop ho jaata hai.",
  nextTopicSlug: "hoisting",
  nextTopicTitle: "Hoisting",
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

export default function CallStackPage({ props }: any) {
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
            learn/call-stack.js
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
