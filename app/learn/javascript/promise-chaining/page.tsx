import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Promise Chaining"
      slug="promise-chaining"
      fileName="learn/promise-chaining.js"
      diagramImage="/javascript/promise-chaining.png"
      nextTopicSlug="async-await"
      nextTopicTitle="async/await"
    />
  );
}
