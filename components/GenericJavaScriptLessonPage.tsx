"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  CheckCircle2,
  Copy,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ContinueButton from "@/components/ContinueButton";
import ConceptHeader from "@/components/ConceptHeader";

interface GenericJavaScriptLessonPageProps {
  topic: string;
  slug: string;
  fileName?: string;
  diagramImage?: string;
  nextTopicSlug?: string;
  nextTopicTitle?: string;
}

function CodeBlock({ code, label }: { code: string; label?: string }) {
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

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
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

const toVarName = (topic: string) =>
  topic
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join("") || "concept";

function createTopicData(topic: string) {
  const concept = toVarName(topic);
  const lowerTopic = topic.toLowerCase();

  return {
    description: `Understand ${topic} in JavaScript with syntax, examples, dry run, common mistakes, and interview-ready notes.`,
    englishExplanation: `${topic} is an important JavaScript concept that helps you write clearer, safer, and more predictable code. The core idea is to understand what problem it solves, how the syntax behaves, and what output JavaScript produces step by step.`,
    babaKiBhashaExplanation: `${topic} JavaScript ka important concept hai jo code ko clear, safe, aur predictable banane mein help karta hai. Main point yeh hai ki yeh kis problem ko solve karta hai, syntax kaise behave karta hai, aur JavaScript step by step kya output deta hai.`,
    whyExists: `${topic} exists because real programs need a consistent way to handle this behavior instead of relying on guesswork. Once you know the rule, debugging and interviews both become much easier.`,
    babaKiBhashaWhyExists: `${topic} isliye exist karta hai kyunki real programs mein is behavior ko guesswork ke bajay clear rule ke saath handle karna padta hai. Rule samajh aate hi debugging aur interviews dono easy ho jaate hain.`,
    realLifeExample: `Think of ${topic} like a labeled tool in a toolbox: when you know exactly what that tool is meant for, you pick it at the right time and avoid forcing the wrong tool into the job.`,
    babaKiBhashaRealLifeExample: `${topic} ko toolbox ke labeled tool jaisa samjho: jab tumhe pata hota hai tool kis kaam ke liye hai, tab tum use right time pe use karte ho aur galat tool force nahi karte.`,
    syntax: `// ${topic} basic pattern\nconst ${concept}Example = "learn ${lowerTopic}";\nconsole.log(${concept}Example);`,
    babaKiBhashaSyntax: `// ${topic} ka basic pattern\nconst ${concept}Example = "learn ${lowerTopic}";\nconsole.log(${concept}Example);`,
    basicExample: `const topic = "${topic}";\nconsole.log("Learning:", topic);`,
    babaKiBhashaBasicExample: `const topic = "${topic}";\nconsole.log("Seekh rahe hain:", topic);`,
    mediumExample: `function explain${concept.charAt(0).toUpperCase() + concept.slice(1)}(value) {\n  return \`${topic}: \${value}\`;\n}\n\nconsole.log(explain${concept.charAt(0).toUpperCase() + concept.slice(1)}("core idea"));`,
    babaKiBhashaMediumExample: `function explain${concept.charAt(0).toUpperCase() + concept.slice(1)}(value) {\n  return \`${topic}: \${value}\`;\n}\n\nconsole.log(explain${concept.charAt(0).toUpperCase() + concept.slice(1)}("main idea"));`,
    advancedExample: `const steps = ["definition", "syntax", "output"];\n\nsteps.forEach((step, index) => {\n  console.log(\`\${index + 1}. ${topic} - \${step}\`);\n});`,
    babaKiBhashaAdvancedExample: `const steps = ["definition", "syntax", "output"];\n\nsteps.forEach((step, index) => {\n  console.log(\`\${index + 1}. ${topic} - \${step}\`);\n});`,
    dryRun: `First JavaScript stores the topic value, then the function or loop runs, and finally each console.log prints the current value. The point is to observe the order of execution instead of only memorizing the final output.`,
    babaKiBhashaDryRun: `Pehle JavaScript topic value store karta hai, phir function ya loop run hota hai, aur finally har console.log current value print karta hai. Main point final output ratna nahi, execution order samajhna hai.`,
    output: `Learning: ${topic}`,
    whyOutput: `The output appears because the value is assigned before console.log runs, so JavaScript can read the variable and print it normally.`,
    babaKiBhashaWhyOutput: `Output isliye aata hai kyunki console.log chalne se pehle value assign ho chuki hoti hai, isliye JavaScript variable ko read karke normal print kar deta hai.`,
    commonMistakes: `A common mistake is learning ${topic} only by definition and not testing small examples. Another mistake is ignoring edge cases, which usually appear in interviews and real debugging.`,
    babaKiBhashaCommonMistakes: `Common mistake yeh hai ki ${topic} ko sirf definition se yaad karna aur small examples test na karna. Dusri mistake edge cases ignore karna hai, jo interviews aur real debugging mein aksar aate hain.`,
    bestPractices: `Write a tiny example, predict the output before running it, then verify in the console. This habit makes ${topic} practical instead of just theoretical.`,
    babaKiBhashaBestPractices: `Chhota example likho, run karne se pehle output predict karo, phir console mein verify karo. Is habit se ${topic} sirf theory nahi, practical concept ban jaata hai.`,
    interviewQuestions: `Explain ${topic} with one simple example, then dry-run the code line by line and tell why the output appears in that order.`,
    babaKiBhashaInterviewQuestions: `${topic} ko ek simple example ke saath explain karo, phir code ko line by line dry-run karke batao output us order mein kyun aata hai.`,
    summary: `${topic} is best learned by connecting the definition, syntax, output, and mistakes together. Once you can dry-run it, you can use it confidently in real JavaScript code.`,
    babaKiBhashaSummary: `${topic} ko definition, syntax, output, aur mistakes ko connect karke seekhna best hai. Jab tum ise dry-run kar sakte ho, tab real JavaScript code mein confidently use kar sakte ho.`,
  };
}

export default function GenericJavaScriptLessonPage({
  topic,
  slug,
  fileName,
  diagramImage,
  nextTopicSlug,
  nextTopicTitle,
}: GenericJavaScriptLessonPageProps) {
  const t = useMemo(() => createTopicData(topic), [topic]);
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
          topic={topic}
          description={t.description}
          fileName={fileName ?? `learn/${slug}.js`}
          diagramImage={diagramImage}
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

          <Section index="03" title="Syntax">
            <CodeBlock
              code={activeTab === "english" ? t.syntax : t.babaKiBhashaSyntax}
              label="syntax"
            />
          </Section>

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
              <span>{activeTab === "english" ? t.interviewQuestions : t.babaKiBhashaInterviewQuestions}</span>
            </p>
          </Section>

          <Section index="11" title="Summary">
            <p className="text-[#c9d1d9]">
              {activeTab === "english" ? t.summary : t.babaKiBhashaSummary}
            </p>
          </Section>
        </div>

        {nextTopicTitle && (
          <div className="mt-4 flex items-center justify-between rounded-lg border border-[#243042] bg-[#111823] px-6 py-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#7d8b9c]">
                Next up
              </span>
              <p className="mt-1 text-[#e9edf2] font-medium">{nextTopicTitle}</p>
            </div>
            <ContinueButton
              nextTopicSlug={nextTopicSlug}
              nextTopicTitle={nextTopicTitle}
            />
          </div>
        )}
      </div>
    </div>
  );
}
