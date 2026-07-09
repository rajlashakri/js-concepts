import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Block Scope"
      slug="block-scope"
      fileName="learn/block-scope.js"
      diagramImage="/javascript/block-scope.png"
      nextTopicSlug="function-scope"
      nextTopicTitle="Function Scope"
    />
  );
}
