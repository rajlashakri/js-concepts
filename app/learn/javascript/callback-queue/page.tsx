import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Callback Queue"
      slug="callback-queue"
      fileName="learn/callback-queue.js"
      diagramImage="/javascript/callback-queue.png"
      nextTopicSlug="microtask-queue"
      nextTopicTitle="Microtask Queue"
    />
  );
}
