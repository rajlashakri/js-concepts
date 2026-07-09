import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Lexical Environment"
      slug="lexical-environment"
      fileName="learn/lexical-environment.js"
      diagramImage="/javascript/lexical-environment.png"
      nextTopicSlug="scope-chain"
      nextTopicTitle="Scope Chain"
    />
  );
}
