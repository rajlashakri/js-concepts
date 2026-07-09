import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Encapsulation"
      slug="encapsulation"
      fileName="learn/encapsulation.js"
      diagramImage="/javascript/encapsulation.png"
      nextTopicSlug="polymorphism"
      nextTopicTitle="Polymorphism"
    />
  );
}
