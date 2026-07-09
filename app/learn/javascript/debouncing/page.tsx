import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Debouncing"
      slug="debouncing"
      fileName="learn/debouncing.js"
      diagramImage="/javascript/debouncing.png"
      nextTopicSlug="throttling"
      nextTopicTitle="Throttling"
    />
  );
}
