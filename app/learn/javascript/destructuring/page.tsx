import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Destructuring"
      slug="destructuring"
      fileName="learn/destructuring.js"
      diagramImage="/javascript/destructuring.png"
      nextTopicSlug="spread-operator"
      nextTopicTitle="Spread Operator"
    />
  );
}
