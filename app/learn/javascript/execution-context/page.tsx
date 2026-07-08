"use client";

import { useState } from "react";
import { Terminal, ChevronRight, Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TOPIC = {
  topic: "Execution Context",
  description: "Learn what execution context means in JavaScript.",
  englishExplanation:
    "Execution context describes the environment where JavaScript code runs and the data it uses while executing.",
  babaKiBhashaExplanation:
    "Execution context ka matlab hai woh jagah jahan JavaScript ka code chalta hai aur jahan us code ka saara data (variables, functions) store hota hai jab tak woh chal raha hota hai.",
  babaKiBhashaBasicExample: `const x = 5; // yeh variable declare kiya\nfunction show() {\n  console.log(x); // yahan x ki value print hogi\n}\nshow(); // function call kiya`,
  babaKiBhashaMediumExample: `function outer() {\n  const value = 10; // outer function ka apna context\n  function inner() {\n    console.log(value); // inner function outer ki value use kar raha hai\n  }\n  inner(); // inner ko call kiya\n}`,
  babaKiBhashaAdvancedExample: `function example() {\n  const a = 1; // example ka context\n  function inner() {\n    console.log(a); // closure ki wajah se a yaad rehta hai\n  }\n  return inner; // inner function return kiya\n}\nconst fn = example(); // example call hua aur context clean ho gaya\nfn(); // fir bhi a yaad hai, isko closure kehte hain`,
  whyExists:
    "This concept exists so you can predict how JavaScript runs code and avoid runtime surprises.",
  babaKiBhashaWhyExists:
    "Yeh concept isliye hai taaki tumhe pata chale JavaScript code ko kaise chalata hai, aur code chalte waqt koi surprise na aaye.",
  realLifeExample:
    "Think of it like a room where a task is being done and all the tools needed for that task are available.",
  babaKiBhashaRealLifeExample:
    "Isko aise samjho jaise ek kamra hai jahan koi kaam ho raha hai, aur us kaam ke liye jitne bhi tools chahiye woh sab wahin maujood hain.",
  syntax: "// No specific syntax applies.",
  babaKiBhashaSyntax: "// Koi specific syntax nahi hai.",
  basicExample: `const x = 5;\nfunction show() {\n  console.log(x);\n}\nshow();`,
  mediumExample: `function outer() {\n  const value = 10;\n  function inner() {\n    console.log(value);\n  }\n  inner();\n}`,
  advancedExample: `function example() {\n  const a = 1;\n  function inner() {\n    console.log(a);\n  }\n  return inner;\n}\nconst fn = example();\nfn();`,
  dryRun:
    "JavaScript creates an environment for the function call and then executes the code inside it.",
  babaKiBhashaDryRun:
    "JavaScript function call ke liye ek environment banata hai, uske baad us environment ke andar ka code execute karta hai.",
  output: "5",
  whyOutput:
    "The function uses the variable from its surrounding environment while executing.",
  babaKiBhashaWhyOutput:
    "Function apne aas-paas ke environment se variable ki value uthata hai jab woh chal raha hota hai.",
  commonMistakes:
    "Forgetting that variables are resolved based on the current execution environment.",
  babaKiBhashaCommonMistakes:
    "Yeh bhool jaana ki variables current execution environment ke hisaab se resolve hote hain.",
  bestPractices:
    "Keep variable scope clear and understand how each function call creates its own context.",
  babaKiBhashaBestPractices:
    "Variable scope ko clear rakho aur samjho ki har function call apna alag context banata hai.",
  interviewQuestions:
    "What is execution context and how does it affect variable access in JavaScript?",
  babaKiBhashaInterviewQuestions:
    "Execution context kya hota hai aur yeh JavaScript mein variable access ko kaise affect karta hai?",
  summary:
    "Execution context is the environment in which JavaScript code is evaluated and executed.",
  babaKiBhashaSummary:
    "Execution context woh environment hai jismein JavaScript code evaluate aur execute hota hai.",
  nextTopicSlug: "global-execution-context",
  nextTopicTitle: "Global Execution Context",
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

export default function ExecutionContextPage({ props }: any) {
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

        {/* Header */}
        {/* Header - editor tab style */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-md bg-[#111823] border border-[#243042] border-b-0 font-mono text-xs text-[#7d8b9c]">
            <Terminal size={13} className="text-[#e8b13a]" />
            learn/{t.nextTopicSlug ? "execution-context" : "topic"}.js
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
              <span className="px-3 py-1 rounded-md bg-[#0b0f14] border border-[#3ec988]/40 font-mono text-sm text-[#3ec988]">
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