import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Event Capturing"
      slug="event-capturing"
      fileName="learn/event-capturing.js"
      diagramImage="/javascript/event-capturing.png"
      nextTopicSlug="local-storage"
      nextTopicTitle="Local Storage"
    />
  );
}
