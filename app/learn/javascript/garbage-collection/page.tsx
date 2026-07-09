import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Garbage Collection"
      slug="garbage-collection"
      fileName="learn/garbage-collection.js"
      diagramImage="/javascript/garbage-collection.png"
      nextTopicSlug="shallow-copy"
      nextTopicTitle="Shallow Copy"
    />
  );
}
