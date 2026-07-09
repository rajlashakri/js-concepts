import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Scope"
      slug="scope"
      fileName="learn/scope.js"
      diagramImage="/javascript/scope.png"
      nextTopicSlug="block-scope"
      nextTopicTitle="Block Scope"
    />
  );
}
