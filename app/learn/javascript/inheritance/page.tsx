import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Inheritance"
      slug="inheritance"
      fileName="learn/inheritance.js"
      diagramImage="/javascript/inheritance.png"
      nextTopicSlug="encapsulation"
      nextTopicTitle="Encapsulation"
    />
  );
}
