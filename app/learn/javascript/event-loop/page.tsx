import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Event Loop"
      slug="event-loop"
      fileName="learn/event-loop.js"
      nextTopicSlug="callback-queue"
      nextTopicTitle="Callback Queue"
    />
  );
}
