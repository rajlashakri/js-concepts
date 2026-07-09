"use client";

import { useState } from "react";
import { Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";
import ConceptHeader from "@/components/ConceptHeader";

const TOPIC = {
  topic: "var vs let vs const",
  description: "Learn how the three ways of declaring a variable differ in scope, reassignment, and hoisting.",
  englishExplanation:
    "var is function-scoped, hoisted with an undefined default, and can be redeclared and reassigned. let is block-scoped, hoisted into the TDZ, and can be reassigned but not redeclared. const is block-scoped like let, cannot be reassigned after its initial value, but note that objects/arrays assigned to a const can still have their contents mutated.",
  babaKiBhashaExplanation:
    "var function-scoped hota hai, undefined default ke saath hoist hota hai, aur usse redeclare aur reassign dono kiya ja sakta hai. let block-scoped hota hai, TDZ mein hoist hota hai, reassign ho sakta hai lekin redeclare nahi. const bhi let jaisa block-scoped hota hai, apni initial value ke baad reassign nahi ho sakta, lekin agar const mein object/array store hai toh uska content mutate ho sakta hai.",
  babaKiBhashaBasicExample: `var a = 1;\nvar a = 2; // redeclare bhi chal jaayega\nconsole.log(a); // 2\n\nlet b = 1;\n// let b = 2; // yeh error dega — redeclare allowed nahi\nb = 2; // reassign chalega\nconsole.log(b); // 2`,
  babaKiBhashaMediumExample: `if (true) {\n  var x = 10; // function/global scope mein jaata hai, block mein nahi rukta\n  let y = 20; // sirf isi block ke andar rehta hai\n}\nconsole.log(x); // 10 — bahar bhi dikhta hai\n// console.log(y); // ReferenceError — y block ke bahar exist hi nahi karta`,
  babaKiBhashaAdvancedExample: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log("var:", i), 0); // teeno callbacks same 'i' share karte hain\n}\n// Output: var: 3, var: 3, var: 3\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log("let:", j), 0); // har iteration ka apna 'j' hota hai\n}\n// Output: let: 0, let: 1, let: 2`,
  whyExists:
    "let and const were introduced in ES6 specifically to fix var's confusing function-scoping and accidental redeclaration, giving developers block scope and, with const, a way to signal 'this binding won't change'.",
  babaKiBhashaWhyExists:
    "let aur const ES6 mein isliye laaye gaye taaki var ki confusing function-scoping aur accidental redeclaration ki problem fix ho sake, developers ko block scope mile aur const ke saath yeh signal mile ki 'yeh binding change nahi hogi'.",
  realLifeExample:
    "var is like leaving your stuff anywhere in a shared house — it's visible to the whole house (function scope). let and const are like keeping your stuff in your own locked room — visible only inside that room (block scope).",
  babaKiBhashaRealLifeExample:
    "var ko aise samjho jaise tum apna saaman shared house mein kahin bhi rakh do — poore ghar (function scope) ko dikhta hai. let aur const ko apne locked room mein saaman rakhne jaisa samjho — sirf usi room (block scope) ke andar dikhta hai.",
  syntax: "var name = value;\nlet name = value;\nconst name = value; // must be initialized immediately",
  babaKiBhashaSyntax: "var name = value;\nlet name = value;\nconst name = value; // turant initialize karna zaroori hai",
  basicExample: `var a = 1;\nvar a = 2;\nconsole.log(a);\n\nlet b = 1;\nb = 2;\nconsole.log(b);`,
  mediumExample: `if (true) {\n  var x = 10;\n  let y = 20;\n}\nconsole.log(x);\n// console.log(y); // ReferenceError`,
  advancedExample: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log("var:", i), 0);\n}\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log("let:", j), 0);\n}`,
  dryRun:
    "The var loop finishes all three iterations first, leaving one shared i at value 3, so every delayed callback reads that same final value. The let loop creates a fresh j binding for each iteration, so each callback captures its own snapshot: 0, 1, 2.",
  babaKiBhashaDryRun:
    "var wala loop pehle teeno iterations poore kar leta hai, ek hi shared i value 3 pe chhod deta hai, isliye har delayed callback wahi final value padhta hai. let wala loop har iteration ke liye ek naya j binding banata hai, isliye har callback apna snapshot capture karta hai: 0, 1, 2.",
  output: "var: 3\\nvar: 3\\nvar: 3\\nlet: 0\\nlet: 1\\nlet: 2",
  whyOutput:
    "Because var is function-scoped, all three setTimeout callbacks close over the same variable, which has already reached 3 by the time they run. Because let is block-scoped, each loop iteration gets its own variable, so each callback keeps the value it saw at that iteration.",
  babaKiBhashaWhyOutput:
    "var function-scoped hai, isliye teeno setTimeout callbacks usi variable ko close over karte hain, jo unke chalne tak already 3 tak pahunch chuka hota hai. let block-scoped hai, isliye har loop iteration ko apna variable milta hai, isliye har callback apni iteration ki value rakhta hai.",
  commonMistakes:
    "Using var inside loops with async callbacks and being surprised all callbacks see the final value, and trying to reassign a const, which throws 'Assignment to constant variable' even though mutating a const object's properties is perfectly fine.",
  babaKiBhashaCommonMistakes:
    "Loops ke andar async callbacks ke saath var use karna aur surprise hona ki sab callbacks final value dekhte hain, aur const ko reassign karne ki koshish karna, jo 'Assignment to constant variable' error deta hai, jabki const object ki properties mutate karna bilkul theek hai.",
  bestPractices:
    "Default to const for anything that won't be reassigned, use let only when a value genuinely needs to change, and avoid var entirely in modern code — it rarely offers any benefit over let/const.",
  babaKiBhashaBestPractices:
    "Default mein const use karo jo cheez reassign nahi hogi, let sirf tab use karo jab value ko genuinely change hona ho, aur modern code mein var bilkul avoid karo — yeh let/const se zyada koi fayda shayad hi deta hai.",
  interviewQuestions:
    "Why does a var-based for loop with setTimeout print the same final value for every callback, while a let-based loop prints each iteration's own value?",
  babaKiBhashaInterviewQuestions:
    "var-based for loop setTimeout ke saath har callback ke liye same final value kyun print karta hai, jabki let-based loop har iteration ki apni value print karta hai?",
  summary:
    "var is function-scoped and loosely enforced, let is block-scoped and reassignable, and const is block-scoped and locked to its initial binding — modern JavaScript favors const first, let when needed, and var almost never.",
  babaKiBhashaSummary:
    "var function-scoped hai aur loosely enforce hota hai, let block-scoped hai aur reassignable hai, aur const block-scoped hai aur apni initial binding pe locked hai — modern JavaScript pehle const, zaroorat pe let, aur var almost kabhi nahi prefer karta hai.",
  nextTopicSlug: "data-types",
  nextTopicTitle: "Data Types",
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

export default function VarLetConstPage({ props }: any) {
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
          fileName="learn/var-let-const.js"
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
