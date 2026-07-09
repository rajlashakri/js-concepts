"use client";

import { useState } from "react";
import {
  AlertTriangle, ArrowLeft, Check, CheckCircle2, Copy, HelpCircle, Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";
import ConceptHeader from "@/components/ConceptHeader";

const TOPIC = {
  topic: "Data Types",
  description:
    "Learn the different kinds of values JavaScript can store and how typeof helps you inspect them.",
  englishExplanation:
    "Data types describe what kind of value a variable is holding. JavaScript has primitive types like string, number, boolean, undefined, null, bigint, and symbol, plus non-primitive values like objects, arrays, and functions. Primitive values are copied by value, while objects are copied by reference.",
  babaKiBhashaExplanation:
    "Data types batate hain ki variable ke andar kis type ki value store hai. JavaScript mein primitive types hote hain jaise string, number, boolean, undefined, null, bigint, symbol, aur non-primitive values hote hain jaise objects, arrays, functions. Primitive values value se copy hoti hain, objects reference se copy hote hain.",
  babaKiBhashaBasicExample: `let name = "Baba"; // string\nlet age = 25; // number\nlet isLearning = true; // boolean\nlet score; // undefined\nlet empty = null; // intentionally empty`,
  babaKiBhashaMediumExample: `console.log(typeof "Baba"); // "string"\nconsole.log(typeof 99); // "number"\nconsole.log(typeof true); // "boolean"\nconsole.log(typeof undefined); // "undefined"\nconsole.log(typeof null); // "object" - old JavaScript quirk`,
  babaKiBhashaAdvancedExample: `const user = { name: "Baba" };\nconst sameUser = user;\n\nsameUser.name = "Code Baba";\n\nconsole.log(user.name); // "Code Baba"\n// object reference same tha, isliye dono same object ko point kar rahe hain`,
  whyExists:
    "Data types exist so the JavaScript engine knows how to store, compare, convert, and operate on values. Adding two numbers, joining two strings, and updating an object all require different behavior.",
  babaKiBhashaWhyExists:
    "Data types isliye hote hain taaki JavaScript engine samajh sake value ko store, compare, convert, aur operate kaise karna hai. Do numbers add karna, do strings join karna, aur object update karna sabka behavior alag hota hai.",
  realLifeExample:
    "Think of data types like labeled boxes: a money box stores numbers, a name tag stores text, a yes/no switch stores booleans, and a profile folder stores many related details together.",
  babaKiBhashaRealLifeExample:
    "Data types ko labeled boxes jaisa samjho: money box numbers rakhta hai, name tag text rakhta hai, yes/no switch boolean rakhta hai, aur profile folder ek saath multiple details store karta hai.",
  syntax:
    'let text = "hello";\nlet count = 10;\nlet isDone = false;\nlet value;\nlet nothing = null;\nlet user = { name: "Baba" };\nlet list = [1, 2, 3];',
  babaKiBhashaSyntax:
    'let text = "hello";\nlet count = 10;\nlet isDone = false;\nlet value;\nlet nothing = null;\nlet user = { name: "Baba" };\nlet list = [1, 2, 3];',
  basicExample: `let language = "JavaScript";\nlet year = 1995;\nlet isPopular = true;\n\nconsole.log(typeof language);\nconsole.log(typeof year);\nconsole.log(typeof isPopular);`,
  mediumExample: `let a;\nlet b = null;\nlet c = [1, 2, 3];\n\nconsole.log(typeof a);\nconsole.log(typeof b);\nconsole.log(Array.isArray(c));`,
  advancedExample: `let x = 10;\nlet y = x;\ny = 20;\nconsole.log(x);\n\nconst user = { name: "Baba" };\nconst copy = user;\ncopy.name = "Code Baba";\nconsole.log(user.name);`,
  dryRun:
    "First, x holds the primitive number 10. y receives a copy of that value, so changing y to 20 does not affect x. Then user holds an object reference. copy receives that same reference, so changing copy.name updates the same object that user points to.",
  babaKiBhashaDryRun:
    "Pehle x primitive number 10 hold karta hai. y ko us value ki copy milti hai, isliye y ko 20 karne se x change nahi hota. Fir user ek object reference hold karta hai. copy ko wahi same reference milta hai, isliye copy.name change karne se wahi object update hota hai jise user point kar raha hai.",
  output: "10\\nCode Baba",
  whyOutput:
    "Primitive numbers are copied independently, so x stays 10. Objects are shared through references, so copy and user both point to the same object and user.name reflects the mutation.",
  babaKiBhashaWhyOutput:
    "Primitive numbers independently copy hote hain, isliye x 10 hi rehta hai. Objects references ke through share hote hain, isliye copy aur user dono same object ko point karte hain aur user.name mutation dikha deta hai.",
  commonMistakes:
    "Treating null and undefined as the same thing, trusting typeof null even though it returns 'object', and assuming object assignment creates a fresh copy when it actually copies the reference.",
  babaKiBhashaCommonMistakes:
    "null aur undefined ko same samajhna, typeof null pe blindly trust karna jabki woh 'object' return karta hai, aur yeh assume karna ki object assignment fresh copy banata hai jabki woh reference copy karta hai.",
  bestPractices:
    "Use null when you intentionally mean 'empty', let undefined mean 'not assigned yet', use Array.isArray for arrays, and be careful when copying objects or arrays because assignment does not deep-copy them.",
  babaKiBhashaBestPractices:
    "Jab intentionally empty value chahiye tab null use karo, undefined ko 'abhi assign nahi hua' ke liye rehne do, arrays ke liye Array.isArray use karo, aur objects/arrays copy karte waqt careful raho kyunki assignment deep copy nahi banata.",
  interviewQuestions:
    "What is the difference between primitive and non-primitive data types in JavaScript, and why does changing one object reference affect another variable?",
  babaKiBhashaInterviewQuestions:
    "JavaScript mein primitive aur non-primitive data types mein kya difference hai, aur ek object reference change karne se doosra variable affect kyun hota hai?",
  summary:
    "JavaScript data types define the shape of values: primitives are simple and copied by value, while objects, arrays, and functions are reference-based and can hold complex data.",
  babaKiBhashaSummary:
    "JavaScript data types values ka shape define karte hain: primitives simple hote hain aur value se copy hote hain, jabki objects, arrays, functions reference-based hote hain aur complex data hold kar sakte hain.",
  nextTopicSlug: "type-conversion",
  nextTopicTitle: "Type Conversion",
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

export default function DataTypesPage({ props }: any) {
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
          fileName="learn/data-types.js"
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
