import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Currying"
      slug="currying"
      fileName="learn/currying.js"
      diagramImage="/javascript/currying.png"
      nextTopicSlug="memoization"
      nextTopicTitle="Memoization"
    />
  );
}
