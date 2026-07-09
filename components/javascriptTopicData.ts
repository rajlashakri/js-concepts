import topicProfilesJson from "@/data/javascript/topicProfiles.json";

type TopicProfile = {
  focus: string;
  use: string;
  syntax: string;
  example: string;
  output: string;
  whyOutput: string;
  mistake: string;
  practice: string;
};

export type JavaScriptTopicData = {
  description: string;
  englishExplanation: string;
  babaKiBhashaExplanation: string;
  whyExists: string;
  babaKiBhashaWhyExists: string;
  realLifeExample: string;
  babaKiBhashaRealLifeExample: string;
  syntax: string;
  babaKiBhashaSyntax: string;
  basicExample: string;
  babaKiBhashaBasicExample: string;
  mediumExample: string;
  babaKiBhashaMediumExample: string;
  advancedExample: string;
  babaKiBhashaAdvancedExample: string;
  dryRun: string;
  babaKiBhashaDryRun: string;
  output: string;
  whyOutput: string;
  babaKiBhashaWhyOutput: string;
  commonMistakes: string;
  babaKiBhashaCommonMistakes: string;
  bestPractices: string;
  babaKiBhashaBestPractices: string;
  interviewQuestions: string;
  babaKiBhashaInterviewQuestions: string;
  summary: string;
  babaKiBhashaSummary: string;
};

type FullTopicData = JavaScriptTopicData & Partial<TopicProfile>;
type TopicEntry = TopicProfile | FullTopicData;

const topicProfiles = topicProfilesJson as Record<string, TopicEntry>;

const isFullTopicData = (entry: TopicEntry): entry is FullTopicData =>
  "description" in entry &&
  "englishExplanation" in entry &&
  "babaKiBhashaExplanation" in entry;

const fallbackProfile = (topic: string): TopicProfile => ({
  focus: `${topic} has its own JavaScript behavior, syntax, and output rules`,
  use: `It helps you write correct code when working with ${topic.toLowerCase()}.`,
  syntax: `// ${topic} example\nconst value = "${topic}";\nconsole.log(value);`,
  example: `const topic = "${topic}";\nconsole.log(topic);`,
  output: topic,
  whyOutput: "The variable is assigned before console.log reads it.",
  mistake: `learning ${topic} only as a definition and not testing runnable examples`,
  practice: "write a small example, predict the output, then verify it",
});

export function createTopicData(slug: string, topic: string): JavaScriptTopicData {
  const entry = topicProfiles[slug];

  if (entry && isFullTopicData(entry)) {
    return entry;
  }

  const profile = entry ?? fallbackProfile(topic);
  const lowerTopic = topic.toLowerCase();

  return {
    description: `Learn ${topic} through its real use case, syntax, output, mistakes, and interview angle.`,
    englishExplanation: `${topic} is about ${profile.focus}. ${profile.use}`,
    babaKiBhashaExplanation: `${topic} ka main idea hai: ${profile.focus}. Simple words mein, ${profile.use.toLowerCase()}`,
    whyExists: `${topic} exists because JavaScript programs need a clear way to handle ${lowerTopic} instead of relying on guesswork.`,
    babaKiBhashaWhyExists: `${topic} isliye important hai kyunki JavaScript mein ${lowerTopic} ko guesswork se nahi, clear rule se handle karna padta hai.`,
    realLifeExample: `Think of ${topic} like a labeled workflow: once you know what it controls, you know where to use it and where not to use it.`,
    babaKiBhashaRealLifeExample: `${topic} ko ek labeled workflow jaisa samjho: rule clear ho toh tumhe pata hota hai ise kahan use karna hai aur kahan avoid karna hai.`,
    syntax: profile.syntax,
    babaKiBhashaSyntax: profile.syntax,
    basicExample: profile.example,
    babaKiBhashaBasicExample: `${profile.example}\n// Pehle output predict karo, phir run karke verify karo.`,
    mediumExample: `${profile.example}\n\n// Change one input and observe how ${topic} behaves.`,
    babaKiBhashaMediumExample: `${profile.example}\n\n// Ek input change karo aur dekho ${topic} ka behavior kaise change hota hai.`,
    advancedExample: `${profile.example}\n\n// Advanced angle: connect this with scope, references, async order, or object behavior where applicable.`,
    babaKiBhashaAdvancedExample: `${profile.example}\n\n// Advanced angle: is concept ko scope, reference, async order, ya object behavior se connect karke dekho.`,
    dryRun: `First JavaScript prepares the values used in the ${topic} example. Then it runs the important operation, applies the rule for ${lowerTopic}, and finally prints the result.`,
    babaKiBhashaDryRun: `Pehle JavaScript ${topic} example ke values prepare karta hai. Fir main operation run hota hai, ${lowerTopic} ka rule apply hota hai, aur finally output print hota hai.`,
    output: profile.output,
    whyOutput: profile.whyOutput,
    babaKiBhashaWhyOutput: profile.whyOutput,
    commonMistakes: `A common mistake is ${profile.mistake}. This usually creates confusing output or bugs during interviews and debugging.`,
    babaKiBhashaCommonMistakes: `Common mistake: ${profile.mistake}. Isi wajah se output confusing lagta hai ya debugging mein bug milta hai.`,
    bestPractices: profile.practice,
    babaKiBhashaBestPractices: profile.practice,
    interviewQuestions: `Explain ${topic} with a small code example and dry-run why the output is ${JSON.stringify(profile.output)}.`,
    babaKiBhashaInterviewQuestions: `${topic} ko ek chhote code example ke saath explain karo aur dry-run karke batao output ${JSON.stringify(profile.output)} kyun aata hai.`,
    summary: `${topic} becomes clear when you connect its purpose, syntax, output rule, and common mistake together.`,
    babaKiBhashaSummary: `${topic} tab clear hota hai jab purpose, syntax, output rule, aur common mistake ko saath mein connect karte ho.`,
  };
}
