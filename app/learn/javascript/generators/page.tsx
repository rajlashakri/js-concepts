import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Generators"
      slug="generators"
      fileName="learn/generators.js"
      diagramImage="/javascript/generators.png"
      nextTopicSlug="currying"
      nextTopicTitle="Currying"
    />
  );
}
