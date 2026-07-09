import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Scope Chain"
      slug="scope-chain"
      fileName="learn/scope-chain.js"
      diagramImage="/javascript/scope-chain.png"
      nextTopicSlug="closures"
      nextTopicTitle="Closures"
    />
  );
}
