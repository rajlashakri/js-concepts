import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Memory Leak"
      slug="memory-leak"
      fileName="learn/memory-leak.js"
      diagramImage="/javascript/memory-leak.png"
      nextTopicSlug="performance-optimization"
      nextTopicTitle="Performance Optimization"
    />
  );
}
