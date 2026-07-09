import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Promises"
      slug="promises"
      fileName="learn/promises.js"
      diagramImage="/javascript/promises.png"
      nextTopicSlug="promise-chaining"
      nextTopicTitle="Promise Chaining"
    />
  );
}
