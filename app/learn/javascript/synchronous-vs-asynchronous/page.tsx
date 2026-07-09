import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Synchronous vs Asynchronous"
      slug="synchronous-vs-asynchronous"
      fileName="learn/synchronous-vs-asynchronous.js"
      diagramImage="/javascript/synchronous-vs-asynchronous.png"
      nextTopicSlug="web-apis"
      nextTopicTitle="Web APIs"
    />
  );
}
