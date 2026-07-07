"use client";

import { useState } from "react";
import { Terminal, ChevronRight, Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";

const TOPIC = {
  topic: "Execution Context",
  description: "Learn what execution context means in JavaScript.",
  englishExplanation:
    "Execution context describes the environment where JavaScript code runs and the data it uses while executing.",
  hinglishExplanation:
    "Execution context batata hai ki JavaScript code kahaan aur kaise chalta hai.",
  whyExists:
    "This concept exists so you can predict how JavaScript runs code and avoid runtime surprises.",
  realLifeExample:
    "Think of it like a room where a task is being done and all the tools needed for that task are available.",
  syntax: "// No specific syntax applies.",
  basicExample: `const x = 5;\nfunction show() {\n  console.log(x);\n}\nshow();`,
  mediumExample: `function outer() {\n  const value = 10;\n  function inner() {\n    console.log(value);\n  }\n  inner();\n}`,
  advancedExample: `function example() {\n  const a = 1;\n  function inner() {\n    console.log(a);\n  }\n  return inner;\n}\nconst fn = example();\nfn();`,
  dryRun:
    "JavaScript creates an environment for the function call and then executes the code inside it.",
  output: "5",
  whyOutput:
    "The function uses the variable from its surrounding environment while executing.",
  commonMistakes:
    "Forgetting that variables are resolved based on the current execution environment.",
  bestPractices:
    "Keep variable scope clear and understand how each function call creates its own context.",
  interviewQuestions:
    "What is execution context and how does it affect variable access in JavaScript?",
  summary:
    "Execution context is the environment in which JavaScript code is evaluated and executed.",
  nextTopicSlug: "global-execution-context",
  nextTopicTitle: "Global Execution Context",
};

function CodeBlock({ code, label }:any) {
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

function Section({ index, title, children }:any) {
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

export default function ExecutionContextPage({props}:any) {
  const t = { ...TOPIC, ...props };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-[#d7dee7] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-14">
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

        {/* Explanation block */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-[#243042] bg-[#111823] p-5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#e8b13a]">
              English
            </span>
            <p className="mt-2 text-[15px] text-[#c9d1d9] leading-relaxed">
              {t.englishExplanation}
            </p>
          </div>
          <div className="rounded-lg border border-[#243042] bg-[#111823] p-5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3ec988]">
              Hinglish
            </span>
            <p className="mt-2 text-[15px] text-[#c9d1d9] leading-relaxed">
              {t.hinglishExplanation}
            </p>
          </div>
        </div>

        {/* Numbered sections */}
        <div>
          <Section index="01" title="Why this exists">
            <p className="flex gap-2">
              <Lightbulb size={16} className="text-[#e8b13a] shrink-0 mt-1" />
              <span>{t.whyExists}</span>
            </p>
          </Section>

          <Section index="02" title="Real-life analogy">
            <p>{t.realLifeExample}</p>
          </Section>

          {t.syntax && (
            <Section index="03" title="Syntax">
              <CodeBlock code={t.syntax} label="syntax" />
            </Section>
          )}

          <Section index="04" title="Basic example">
            <CodeBlock code={t.basicExample} label="basic.js" />
          </Section>

          <Section index="05" title="Medium example">
            <CodeBlock code={t.mediumExample} label="medium.js" />
          </Section>

          <Section index="06" title="Advanced example">
            <CodeBlock code={t.advancedExample} label="advanced.js" />
          </Section>

          <Section index="07" title="Dry run">
            <p>{t.dryRun}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs font-mono text-[#7d8b9c]">Output</span>
              <span className="px-3 py-1 rounded-md bg-[#0b0f14] border border-[#3ec988]/40 font-mono text-sm text-[#3ec988]">
                {t.output}
              </span>
            </div>
            <p className="mt-2 text-[#8b949e] text-sm">{t.whyOutput}</p>
          </Section>

          <Section index="08" title="Common mistakes">
            <p className="flex gap-2">
              <AlertTriangle size={16} className="text-[#e5533c] shrink-0 mt-1" />
              <span>{t.commonMistakes}</span>
            </p>
          </Section>

          <Section index="09" title="Best practices">
            <p className="flex gap-2">
              <CheckCircle2 size={16} className="text-[#3ec988] shrink-0 mt-1" />
              <span>{t.bestPractices}</span>
            </p>
          </Section>

          <Section index="10" title="Interview question">
            <p className="flex gap-2">
              <HelpCircle size={16} className="text-[#e8b13a] shrink-0 mt-1" />
              <span>{t.interviewQuestions}</span>
            </p>
          </Section>

          <Section index="11" title="Summary">
            <p className="text-[#c9d1d9]">{t.summary}</p>
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