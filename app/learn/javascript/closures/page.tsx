import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Closures"
      slug="closures"
      fileName="learn/closures.js"
      diagramImage="/javascript/closures.png"
      nextTopicSlug="functions"
      nextTopicTitle="Functions"
    />
  );
}
