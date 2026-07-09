import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Throttling"
      slug="throttling"
      fileName="learn/throttling.js"
      diagramImage="/javascript/throttling.png"
      nextTopicSlug="event-delegation"
      nextTopicTitle="Event Delegation"
    />
  );
}
