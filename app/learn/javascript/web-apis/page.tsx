import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Web APIs"
      slug="web-apis"
      fileName="learn/web-apis.js"
      diagramImage="/javascript/web-apis.png"
      nextTopicSlug="event-loop"
      nextTopicTitle="Event Loop"
    />
  );
}
