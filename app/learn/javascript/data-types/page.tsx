import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Data Types"
      slug="data-types"
      fileName="learn/data-types.js"
      diagramImage="/javascript/data-types.png"
      nextTopicSlug="type-conversion"
      nextTopicTitle="Type Conversion"
    />
  );
}
