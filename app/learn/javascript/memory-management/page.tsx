import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Memory Management"
      slug="memory-management"
      fileName="learn/memory-management.js"
      nextTopicSlug="garbage-collection"
      nextTopicTitle="Garbage Collection"
    />
  );
}
