"use client";

import { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TOPIC = {
  topic: "Introduction to JavaScript",
  description: "Learn the basics of JavaScript and understand how the language works.",

  englishExplanation:
    "JavaScript is a programming language that allows developers to create interactive, dynamic, and powerful web applications.",

  babaKiBhashaExplanation:
    "JavaScript ek programming language hai jo websites ko interactive aur dynamic banati hai. Iski madad se hum website me logic, actions aur functionality add kar sakte hain.",


  babaKiBhashaBasicExample: `// Variable store karna
const name = "Baba";

console.log(name); // output: Baba`,


  babaKiBhashaMediumExample: `function greet(user) {
  return "Hello " + user;
}

const message = greet("Developer");

console.log(message);`,


  babaKiBhashaAdvancedExample: `const user = {
  name: "Rahul",
  age: 22,
};

function introduce(person) {
  console.log(
    person.name + " is " + person.age + " years old"
  );
}

introduce(user);`,


  whyExists:
    "JavaScript exists to make websites interactive and allow developers to build complete applications in the browser.",

  babaKiBhashaWhyExists:
    "JavaScript isliye banayi gayi taaki simple websites me interaction aa sake aur hum browser ke andar powerful applications bana sake.",


  realLifeExample:
    "HTML creates the structure, CSS designs it, and JavaScript adds behavior and intelligence.",

  babaKiBhashaRealLifeExample:
    "HTML website ka structure banata hai, CSS usko design karta hai aur JavaScript usme jaan daalti hai jisse website kaam karti hai.",


  syntax:
    `let variableName = value;

function functionName() {
  // code
}`,

  babaKiBhashaSyntax:
    `let variableName = value;

function functionName() {
  // yahan code likhte hain
}`,


  basicExample:
    `const age = 20;

console.log(age);`,


  mediumExample:
    `function add(a, b) {
  return a + b;
}

console.log(add(5, 3));`,


  advancedExample:
    `class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user = new User("Baba");
user.greet();`,


  dryRun:
    "JavaScript reads the code, creates memory for variables and functions, and then executes instructions line by line.",

  babaKiBhashaDryRun:
    "JavaScript pehle code ko samajhta hai, variables aur functions ke liye memory banata hai aur phir code ko line by line chalata hai.",


  output: "Hello Baba",


  whyOutput:
    "The function receives the value and returns a new string which gets printed.",

  babaKiBhashaWhyOutput:
    "Function ko value milti hai aur woh ek nayi string return karta hai jo console me print hoti hai.",


  commonMistakes:
    "Trying to learn syntax without understanding JavaScript fundamentals and concepts.",

  babaKiBhashaCommonMistakes:
    "Sirf syntax yaad karna aur JavaScript ke basic concepts ko samajhne ki koshish na karna.",


  bestPractices:
    "Understand concepts first, write clean code, and practice by building projects.",

  babaKiBhashaBestPractices:
    "Pehle concepts samjho, clean code likho aur projects bana kar practice karo.",


  interviewQuestions:
    "What is JavaScript and why is it used in modern web development?",

  babaKiBhashaInterviewQuestions:
    "JavaScript kya hai aur modern web development me iska use kyu hota hai?",


  summary:
    "JavaScript is a powerful programming language used to create interactive and dynamic web applications.",

  babaKiBhashaSummary:
    "JavaScript ek powerful programming language hai jiska use interactive aur dynamic web applications banane ke liye hota hai.",


  nextTopicSlug: "variables",
  nextTopicTitle: "Variables in JavaScript",
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

        <span className="text-xs font-mono text-[#7d8b9c]">
          {label}
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs font-mono text-[#7d8b9c] hover:text-[#e8b13a]"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "copied" : "copy"}
        </button>

      </div>


      <pre className="p-4 overflow-x-auto text-sm">
        <code className="font-mono text-[#d7dee7]">
          {code}
        </code>
      </pre>

    </div>
  );
}



function Section({ index, title, children }: any) {

  return (
    <section className="relative pl-14 pb-10">

      <div className="absolute left-0 top-0">

        <span className="w-9 h-9 rounded-md bg-[#111823] border border-[#243042] flex items-center justify-center font-mono text-xs text-[#e8b13a]">
          {index}
        </span>

      </div>


      <h2 className="text-lg font-semibold text-[#e9edf2] mb-3">
        {title}
      </h2>


      <div className="text-[15px] text-[#aeb9c4] leading-relaxed">
        {children}
      </div>


    </section>
  );
}



export default function IntroductionToJavascriptPage() {

  const router = useRouter();

  const t = TOPIC;

  const [activeTab, setActiveTab] =
    useState<"english" | "babaKiBhasha">("english");


  return (

    <div className="min-h-screen bg-[#0b0f14] text-[#d7dee7]">

      <div className="max-w-3xl mx-auto px-6 py-14">


        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-sm font-mono text-[#7d8b9c] hover:text-[#e8b13a]"
        >
          <ArrowLeft size={15} />
          Back
        </button>



        <div className="mb-10">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111823] border border-[#243042] font-mono text-xs text-[#7d8b9c]">
            <Terminal size={13} />
            learn/introduction-to-javascript.js
          </div>


          <div className="border border-[#243042] bg-[#111823] px-6 py-8">

            <h1 className="text-4xl font-mono font-bold">
              {t.topic}
            </h1>


            <p className="mt-3 text-[#8b949e]">
              {t.description}
            </p>

          </div>

        </div>




        <div className="mb-12 border border-[#243042] bg-[#111823] rounded-lg overflow-hidden">

          <div className="flex border-b border-[#243042]">

            <button
              onClick={() => setActiveTab("english")}
              className="px-5 py-3 text-xs font-mono text-[#e8b13a]"
            >
              English
            </button>


            <button
              onClick={() => setActiveTab("babaKiBhasha")}
              className="px-5 py-3 text-xs font-mono text-[#3ec988]"
            >
              Baba ki Bhasha
            </button>


          </div>


          <div className="p-5">

            {activeTab === "english"
              ? t.englishExplanation
              : t.babaKiBhashaExplanation}

          </div>

        </div>





        <Section index="01" title="Why this exists">

          <p className="flex gap-2">
            <Lightbulb size={16} />
            {activeTab === "english"
              ? t.whyExists
              : t.babaKiBhashaWhyExists}
          </p>

        </Section>




        <Section index="02" title="Real-life analogy">

          <p>
            {activeTab === "english"
              ? t.realLifeExample
              : t.babaKiBhashaRealLifeExample}
          </p>

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

          <p>
            {activeTab === "english"
              ? t.dryRun
              : t.babaKiBhashaDryRun}
          </p>

          <div className="mt-3 text-[#3ec988] font-mono">
            Output: {t.output}
          </div>

        </Section>




        <Section index="08" title="Common mistakes">

          <p className="flex gap-2">
            <AlertTriangle size={16} />
            {activeTab === "english"
              ? t.commonMistakes
              : t.babaKiBhashaCommonMistakes}
          </p>

        </Section>




        <Section index="09" title="Best practices">

          <p className="flex gap-2">
            <CheckCircle2 size={16} />
            {activeTab === "english"
              ? t.bestPractices
              : t.babaKiBhashaBestPractices}
          </p>

        </Section>




        <Section index="10" title="Interview question">

          <p className="flex gap-2">
            <HelpCircle size={16} />
            {activeTab === "english"
              ? t.interviewQuestions
              : t.babaKiBhashaInterviewQuestions}
          </p>

        </Section>




        <Section index="11" title="Summary">

          <p>
            {activeTab === "english"
              ? t.summary
              : t.babaKiBhashaSummary}
          </p>

        </Section>



        <div className="mt-5 flex justify-between border border-[#243042] bg-[#111823] px-6 py-5 rounded-lg">

          <div>
            <span className="text-xs text-[#7d8b9c]">
              Next up
            </span>

            <p>
              {t.nextTopicTitle}
            </p>

          </div>


          <ArrowRight />

        </div>


      </div>

    </div>

  );
}