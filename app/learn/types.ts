export interface TopicContent {
  title: string
  description: string
  englishExplanation: string
  hinglishExplanation: string
  whyExists: string
  realLifeExample: string
  syntax: string
  basicExample: string
  mediumExample: string
  advancedExample: string
  dryRun: string
  output: string
  whyOutput: string
  commonMistakes: string
  bestPractices: string
  interviewQuestions: string
  summary: string
  nav: {
    slug: string
    topic: string
    nextSlug: string
    nextTopic: string
  }
}
