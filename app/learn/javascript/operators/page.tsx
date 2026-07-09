import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Operators"
      slug="operators"
      fileName="learn/operators.js"
      diagramImage="/javascript/operators.png"
      nextTopicSlug="truthy-falsy-values"
      nextTopicTitle="Truthy & Falsy Values"
    />
  );
}
