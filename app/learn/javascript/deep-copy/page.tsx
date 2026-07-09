import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Deep Copy"
      slug="deep-copy"
      fileName="learn/deep-copy.js"
      diagramImage="/javascript/deep-copy.png"
      nextTopicSlug="pass-by-value-vs-reference"
      nextTopicTitle="Pass by Value vs Reference"
    />
  );
}
