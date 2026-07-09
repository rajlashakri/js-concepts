import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Pass by Value vs Reference"
      slug="pass-by-value-vs-reference"
      fileName="learn/pass-by-value-vs-reference.js"
      diagramImage="/javascript/pass-by-value-vs-reference.png"
      nextTopicSlug="memory-leak"
      nextTopicTitle="Memory Leak"
    />
  );
}
