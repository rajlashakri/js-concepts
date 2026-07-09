import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Event Bubbling"
      slug="event-bubbling"
      fileName="learn/event-bubbling.js"
      diagramImage="/javascript/event-bubbling.png"
      nextTopicSlug="event-capturing"
      nextTopicTitle="Event Capturing"
    />
  );
}
