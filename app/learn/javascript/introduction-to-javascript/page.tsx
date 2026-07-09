"use client";

import { useState } from "react";
import { Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";
import ConceptHeader from "@/components/ConceptHeader";

const TOPIC = {
  topic: "Introduction to JavaScript",
  description: "Learn what JavaScript is and why every website uses it.",
  englishExplanation:
    "JavaScript is a programming language that runs in the browser (and on servers via Node.js) and lets you make web pages interactive — reacting to clicks, updating content without reloading, and talking to servers.",
  babaKiBhashaExplanation:
    "JavaScript ek programming language hai jo browser ke andar chalti hai (aur Node.js ki wajah se server pe bhi). Isi se website interactive banti hai — jaise button click hona, page ka content bina reload kiye update hona, aur server se data mangwana.",
  babaKiBhashaBasicExample: `console.log("Hello, duniya!"); // yeh line screen pe kuch nahi, console mein print karti hai`,
  babaKiBhashaMediumExample: `let naam = "Rohan"; // variable banaya\nfunction greet(user) {\n  console.log("Namaste, " + user + "!"); // greeting print hui\n}\ngreet(naam); // function call kiya naam ke saath`,
  babaKiBhashaAdvancedExample: `const students = ["Amit", "Priya", "Zoya"]; // list of students\n\nstudents.forEach(function (student, index) {\n  console.log(\`\${index + 1}. \${student}\`); // har student ko number ke saath print kiya\n});`,
  whyExists:
    "JavaScript exists because static HTML pages couldn't respond to anything a user did — it was the missing piece that let browsers run actual logic.",
  babaKiBhashaWhyExists:
    "JavaScript isliye bani kyunki static HTML page kuch bhi respond nahi kar sakta tha jab user kuch karta tha — yeh woh missing piece thi jisne browser ko actual logic chalane ki power di.",
  realLifeExample:
    "Think of HTML as the skeleton of a page, CSS as its clothes, and JavaScript as its muscles — the part that actually makes it move and respond.",
  babaKiBhashaRealLifeExample:
    "HTML ko page ka skeleton samjho, CSS ko uske kapde, aur JavaScript ko uski muscles — jo actually page ko move aur respond karwati hai.",
  syntax: "// JavaScript can run directly in a <script> tag or a .js file\nconsole.log(\"any statement ends with a semicolon\");",
  babaKiBhashaSyntax: "// JavaScript <script> tag mein ya .js file mein chal sakti hai\nconsole.log(\"har statement semicolon se khatam hota hai\");",
  basicExample: `console.log("Hello, world!");`,
  mediumExample: `let name = "Rohan";\nfunction greet(user) {\n  console.log("Hello, " + user + "!");\n}\ngreet(name);`,
  advancedExample: `const students = ["Amit", "Priya", "Zoya"];\n\nstudents.forEach(function (student, index) {\n  console.log(\`\${index + 1}. \${student}\`);\n});`,
  dryRun:
    "JavaScript runs top to bottom: it defines the list, then calls forEach, which runs the callback once per item, passing in the item and its position.",
  babaKiBhashaDryRun:
    "JavaScript upar se neeche chalta hai: pehle list banti hai, fir forEach call hota hai, jo har item ke liye callback ek baar chalata hai, item aur uska position dono deta hai.",
  output: "1. Amit\\n2. Priya\\n3. Zoya",
  whyOutput:
    "forEach hands each array element to the callback along with its index, and the template string stitches the number and name together.",
  babaKiBhashaWhyOutput:
    "forEach har array element ko uske index ke saath callback ko deta hai, aur template string number aur naam ko jod deti hai.",
  commonMistakes:
    "Confusing = (assignment) with === (comparison), and forgetting that JavaScript is single-threaded — long-running code blocks everything else.",
  babaKiBhashaCommonMistakes:
    "= (assignment) aur === (comparison) mein confuse ho jaana, aur yeh bhool jaana ki JavaScript single-threaded hai — lamba chalne wala code baaki sab kuch block kar deta hai.",
  bestPractices:
    "Use const by default, let only when a value needs to change, and never var. Keep functions small and name them by what they do.",
  babaKiBhashaBestPractices:
    "Default mein const use karo, let sirf tab jab value change honi ho, aur var kabhi mat use karo. Functions ko chhota rakho aur unka naam waisa do jo woh karte hain.",
  interviewQuestions:
    "What makes JavaScript different from a language like Java, and where can it run?",
  babaKiBhashaInterviewQuestions:
    "JavaScript, Java jaisi language se kaise alag hai, aur yeh kahan-kahan chal sakti hai?",
  summary:
    "JavaScript is the language that brings interactivity to the web, running in browsers and, via Node.js, on servers too.",
  babaKiBhashaSummary:
    "JavaScript woh language hai jo web ko interactive banati hai — browser mein toh chalti hi hai, Node.js ki wajah se server pe bhi chalti hai.",
  nextTopicSlug: "execution-context",
  nextTopicTitle: "Execution Context",
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

export default function IntroductionToJavascriptPage({ props }: any) {
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

        <ConceptHeader
          topic={t.topic}
          description={t.description}
          fileName="learn/introduction-to-javascript.js"
          diagramImage="/javascript/introduction-to-javascript.png"
        />

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
