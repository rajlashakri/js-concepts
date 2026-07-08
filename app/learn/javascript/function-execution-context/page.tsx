"use client";

import { useState } from "react";
import { Terminal, ChevronRight, Copy, Check, Lightbulb, AlertTriangle, CheckCircle2, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TOPIC = {
  topic: "Function Execution Context",
  description: "Learn what happens every time a function is called — and why each call gets its own fresh environment.",
  englishExplanation:
    "A Function Execution Context (FEC) is created every single time a function is invoked. Unlike the Global Execution Context, which exists once, a new FEC is pushed onto the call stack for each call — with its own arguments object, local variables, and 'this' binding — and popped off once the function returns.",
  babaKiBhashaExplanation:
    "Function Execution Context (FEC) har baar banta hai jab bhi koi function call hota hai. Global Execution Context ke ulat, jo sirf ek baar banta hai, har function call ke liye ek naya FEC call stack pe push hota hai — apna arguments object, local variables, aur 'this' binding ke saath — aur function return hote hi pop ho jaata hai.",
  babaKiBhashaBasicExample: `function greet(name) {\n  var message = "Namaste, " + name; // yeh 'message' sirf isi call ke FEC mein hai\n  console.log(message);\n}\ngreet("Rohan"); // ek naya FEC banta hai`,
  babaKiBhashaMediumExample: `function add(a, b) {\n  var result = a + b; // har call ka apna 'result' hota hai\n  return result;\n}\nconsole.log(add(2, 3)); // pehla FEC: a=2, b=3\nconsole.log(add(10, 20)); // dusra FEC: a=10, b=20, pehle wala already khatam ho chuka`,
  babaKiBhashaAdvancedExample: `function outer() {\n  var count = 0; // outer ka apna FEC\n  function inner() {\n    count++; // inner apne FEC se outer ke variable ko access kar raha hai\n    console.log(count);\n  }\n  inner(); // inner ka FEC banta hai, count access karta hai, phir pop ho jaata hai\n  inner(); // naya FEC banta hai, lekin count wahi purana rehta hai (closure ki wajah se)\n}\nouter();`,
  whyExists:
    "It exists so that every function call gets an isolated workspace — local variables from one call never leak into or clash with another call, even for the same function running recursively or repeatedly.",
  babaKiBhashaWhyExists:
    "Yeh isliye zaroori hai taaki har function call ko apna alag workspace mile — ek call ke local variables kabhi doosre call mein leak ya clash nahi karte, chahe wahi function recursively ya baar-baar chal raha ho.",
  realLifeExample:
    "Think of each function call as checking into its own hotel room: you get a fresh, empty room every time you check in, and whatever you leave in it disappears once you check out — the next guest starts with an empty room too.",
  babaKiBhashaRealLifeExample:
    "Har function call ko ek hotel room mein check-in karne jaisa samjho: har baar check-in karte waqt tumhe ek naya, khaali room milta hai, aur check-out karte hi jo bhi usme chhoda tha woh gayab ho jaata hai — agla guest bhi khaali room se hi shuru karta hai.",
  syntax: "// Created automatically on every function call\nfunctionName(); // this call alone creates and later destroys one FEC",
  babaKiBhashaSyntax: "// Har function call pe automatically banta hai\nfunctionName(); // sirf yeh call ek FEC banata hai aur baad mein destroy kar deta hai",
  basicExample: `function greet(name) {\n  var message = "Hello, " + name;\n  console.log(message);\n}\ngreet("Rohan");`,
  mediumExample: `function add(a, b) {\n  var result = a + b;\n  return result;\n}\nconsole.log(add(2, 3));\nconsole.log(add(10, 20));`,
  advancedExample: `function outer() {\n  var count = 0;\n  function inner() {\n    count++;\n    console.log(count);\n  }\n  inner();\n  inner();\n}\nouter();`,
  dryRun:
    "Calling outer() creates one FEC for outer, which sets count to 0. Each call to inner() creates its own FEC, but inner's FEC looks up count in outer's FEC via the scope chain, increments it, and logs it — so the second inner() call sees the value left behind by the first.",
  babaKiBhashaDryRun:
    "outer() call karne se outer ka ek FEC banta hai, jisme count 0 set hota hai. inner() ke har call se uska apna FEC banta hai, lekin inner ka FEC scope chain ke through outer ke FEC mein count ko dhoondta hai, use increment karta hai, aur log karta hai — isliye inner() ki dusri call pehli call ki chhodi hui value dekhti hai.",
  output: "1\\n2",
  whyOutput:
    "count lives in outer's FEC, not inner's. Since both inner() calls share the same outer FEC through closure, the increments accumulate: 1 on the first call, 2 on the second.",
  babaKiBhashaWhyOutput:
    "count outer ke FEC mein rehta hai, inner ke nahi. Chunki dono inner() calls closure ke through wahi outer FEC share karte hain, increments jama hote jaate hain: pehli call pe 1, dusri call pe 2.",
  commonMistakes:
    "Assuming variables declared inside a function are visible outside it, and forgetting that each recursive call creates a brand-new FEC on the stack — recursion doesn't reuse the previous call's variables.",
  babaKiBhashaCommonMistakes:
    "Yeh sochna ki function ke andar declare kiye variables uske bahar bhi dikhte hain, aur yeh bhool jaana ki har recursive call stack pe ek bilkul naya FEC banata hai — recursion pichli call ke variables ko reuse nahi karta.",
  bestPractices:
    "Keep functions focused on their own local state, avoid relying on outer variables unless you intend a closure, and remember deep recursion pushes many FECs onto the stack, which can overflow it.",
  babaKiBhashaBestPractices:
    "Functions ko apne local state tak focused rakho, outer variables pe bharosa mat karo jab tak closure banana hi maksad na ho, aur yaad rakho ki deep recursion stack pe bahut saare FEC push kar deta hai, jo overflow kar sakta hai.",
  interviewQuestions:
    "How many Function Execution Contexts exist at once when a function calls itself recursively three times, and what happens to each one?",
  babaKiBhashaInterviewQuestions:
    "Agar ek function khud ko recursively teen baar call kare, toh ek saath kitne Function Execution Context exist karte hain, aur har ek ka kya hota hai?",
  summary:
    "A Function Execution Context is created fresh on every function call, giving that call its own arguments, local variables, and 'this', then gets popped off the call stack when the function finishes.",
  babaKiBhashaSummary:
    "Function Execution Context har function call pe naya banta hai, jo us call ko apne arguments, local variables, aur 'this' deta hai, aur function khatam hote hi call stack se pop ho jaata hai.",
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

export default function FunctionExecutionContextPage({ props }: any) {
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
            learn/function-execution-context.js
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