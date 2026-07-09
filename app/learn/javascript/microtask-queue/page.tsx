import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Microtask Queue"
      slug="microtask-queue"
      fileName="learn/microtask-queue.js"
      diagramImage="/javascript/microtask-queue.png"
      nextTopicSlug="macrotask-queue"
      nextTopicTitle="Macrotask Queue"
    />
  );
}
