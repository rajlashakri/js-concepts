import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Memoization"
      slug="memoization"
      fileName="learn/memoization.js"
      diagramImage="/javascript/memoization.png"
      nextTopicSlug="debouncing"
      nextTopicTitle="Debouncing"
    />
  );
}
