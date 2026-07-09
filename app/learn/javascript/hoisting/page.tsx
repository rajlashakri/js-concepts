import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Hoisting"
      slug="hoisting"
      fileName="learn/hoisting.js"
      diagramImage="/javascript/hoisting.png"
      nextTopicSlug="temporal-dead-zone-tdz"
      nextTopicTitle="Temporal Dead Zone (TDZ)"
    />
  );
}
