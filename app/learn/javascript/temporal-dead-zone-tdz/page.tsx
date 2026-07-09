"use client";

import { useState } from "react";
import { Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";
import ConceptHeader from "@/components/ConceptHeader";

const TOPIC = {
  topic: "Temporal Dead Zone (TDZ)",
  description: "Learn why accessing a let or const variable too early throws an error instead of returning undefined.",
  englishExplanation:
    "The Temporal Dead Zone is the span of code between entering a scope and the line where a let or const variable is actually declared. The variable exists in memory during this span (it's hoisted), but it can't be read or written — trying to access it throws a ReferenceError instead of silently returning undefined.",
  babaKiBhashaExplanation:
    "Temporal Dead Zone woh code ka hissa hai jo scope mein enter karne aur us line ke beech mein aata hai jahan let ya const variable actually declare hota hai. Is span mein variable memory mein exist karta hai (hoist ho chuka hota hai), lekin use read ya write nahi kiya ja sakta — access karne ki koshish karne pe ReferenceError aata hai, chup chaap undefined nahi milta.",
  babaKiBhashaBasicExample: `console.log(score); // ReferenceError — TDZ ke andar hai\nlet score = 100;`,
  babaKiBhashaMediumExample: `{\n  // block shuru — TDZ shuru\n  console.log(city); // ReferenceError\n  let city = "Bhopal"; // yahan se TDZ khatam, ab city usable hai\n  console.log(city); // "Bhopal"\n}`,
  babaKiBhashaAdvancedExample: `function checkTemp(temp) {\n  if (temp > threshold) { // ReferenceError — 'threshold' abhi declare nahi hua isi block mein\n    console.log("garam hai");\n  }\n  let threshold = 30; // agar yeh line upar hoti, tab kaam karta\n}\ncheckTemp(35);`,
  whyExists:
    "The TDZ exists to catch a real class of bugs — reading a variable before its declaration line almost always signals a logic mistake, so ES6 made it a hard error instead of letting var's silent 'undefined' behavior hide the problem.",
  babaKiBhashaWhyExists:
    "TDZ isliye hai taaki ek real bug pakda ja sake — declaration line se pehle variable read karna almost hamesha ek logic mistake ko signal karta hai, isliye ES6 ne ise ek hard error banaya, na ki var jaisa chup chaap 'undefined' dekar problem chhupane diya.",
  realLifeExample:
    "It's like a parcel that has already arrived at the delivery office (it exists) but is locked in a cage until the recipient's name is officially registered — you can see it's there, but you cannot touch it yet.",
  babaKiBhashaRealLifeExample:
    "Isko aise samjho jaise ek parcel delivery office mein pahuch chuka hai (exist karta hai) lekin cage mein locked hai jab tak recipient ka naam officially register nahi ho jaata — tumhe dikhta hai ki woh wahan hai, lekin abhi tum use chhoo nahi sakte.",
  syntax: "// TDZ applies automatically to every let and const\n// It ends the moment the declaration line executes",
  babaKiBhashaSyntax: "// TDZ automatically har let aur const pe apply hota hai\n// Yeh declaration line execute hote hi khatam ho jaata hai",
  basicExample: `console.log(score);\nlet score = 100;`,
  mediumExample: `{\n  console.log(city);\n  let city = "Bhopal";\n  console.log(city);\n}`,
  advancedExample: `function checkTemp(temp) {\n  if (temp > threshold) {\n    console.log("it's hot");\n  }\n  let threshold = 30;\n}\ncheckTemp(35);`,
  dryRun:
    "Entering checkTemp's scope hoists threshold but leaves it in the TDZ. The if-condition tries to read threshold before its declaration line has run, so the engine throws a ReferenceError right there — the function never even reaches the console.log.",
  babaKiBhashaDryRun:
    "checkTemp ke scope mein enter karte hi threshold hoist ho jaata hai lekin TDZ mein rehta hai. if-condition threshold ko uski declaration line chalne se pehle hi read karne ki koshish karta hai, isliye engine wahin ReferenceError throw kar deta hai — function console.log tak pahuchta hi nahi.",
  output: "ReferenceError: Cannot access 'threshold' before initialization",
  whyOutput:
    "threshold is in the TDZ at the point the if-condition runs because its let declaration hasn't executed yet in this call, so any read attempt before that line throws instead of returning undefined.",
  babaKiBhashaWhyOutput:
    "if-condition chalne ke waqt threshold TDZ mein hota hai kyunki uski let declaration is call mein abhi tak execute nahi hui, isliye us line se pehle koi bhi read attempt undefined return karne ki jagah error throw karta hai.",
  commonMistakes:
    "Assuming let/const behave exactly like var except for scoping, and not realizing that the TDZ applies per-scope — re-entering a loop or block creates a brand-new TDZ for that iteration's let variable.",
  babaKiBhashaCommonMistakes:
    "Yeh sochna ki let/const scoping ke alawa bilkul var jaisa hi behave karte hain, aur yeh na samajhna ki TDZ per-scope apply hota hai — loop ya block mein dobara enter karna us iteration ke let variable ke liye ek bilkul naya TDZ banata hai.",
  bestPractices:
    "Declare let/const variables at the top of the block they're used in so there's no gap for a TDZ-related error to occur, and treat a 'Cannot access before initialization' error as a sign to reorder your declarations, not to switch back to var.",
  babaKiBhashaBestPractices:
    "let/const variables ko us block ke top pe declare karo jahan woh use ho rahe hain, taaki TDZ-related error ke liye koi gap na bache, aur 'Cannot access before initialization' error ko declarations reorder karne ka signal samjho, var pe wapas jaane ka nahi.",
  interviewQuestions:
    "Why does accessing a let variable before its declaration throw a ReferenceError, while accessing a var in the same situation returns undefined?",
  babaKiBhashaInterviewQuestions:
    "let variable ko uski declaration se pehle access karna ReferenceError kyun deta hai, jabki isi situation mein var access karne pe undefined milta hai?",
  summary:
    "The Temporal Dead Zone is the window where a hoisted let or const variable exists but can't be accessed, closing the moment its declaration line runs — a deliberate safeguard against reading variables before they're meant to be used.",
  babaKiBhashaSummary:
    "Temporal Dead Zone woh window hai jahan hoist ho chuka let ya const variable exist toh karta hai lekin access nahi kiya ja sakta, jo uski declaration line chalte hi band ho jaata hai — yeh ek jaanbhoojh kar diya gaya safeguard hai taaki variables use se pehle na padhe jaayein.",
  nextTopicSlug: "var-vs-let-vs-const",
  nextTopicTitle: "var vs let vs const",
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

export default function TemporalDeadZonePage({ props }: any) {
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
          fileName="learn/temporal-dead-zone.js"
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
