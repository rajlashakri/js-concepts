import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Function Scope"
      slug="function-scope"
      fileName="learn/function-scope.js"
      diagramImage="/javascript/function-scope.png"
      nextTopicSlug="lexical-environment"
      nextTopicTitle="Lexical Environment"
    />
  );
}
