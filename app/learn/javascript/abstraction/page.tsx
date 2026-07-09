import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Abstraction"
      slug="abstraction"
      fileName="learn/abstraction.js"
      diagramImage="/javascript/abstraction.png"
      nextTopicSlug="synchronous-vs-asynchronous"
      nextTopicTitle="Synchronous vs Asynchronous"
    />
  );
}
