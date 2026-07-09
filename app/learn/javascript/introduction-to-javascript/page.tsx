import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Introduction to JavaScript"
      slug="introduction-to-javascript"
      fileName="learn/introduction-to-javascript.js"
      diagramImage="/javascript/introduction-to-javascript.png"
      nextTopicSlug="execution-context"
      nextTopicTitle="Execution Context"
    />
  );
}
