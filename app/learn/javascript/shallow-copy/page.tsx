import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Shallow Copy"
      slug="shallow-copy"
      fileName="learn/shallow-copy.js"
      diagramImage="/javascript/shallow-copy.png"
      nextTopicSlug="deep-copy"
      nextTopicTitle="Deep Copy"
    />
  );
}
