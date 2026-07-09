import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Execution Context"
      slug="execution-context"
      fileName="learn/execution-context.js"
      diagramImage="/javascript/execution-context.png"
      nextTopicSlug="global-execution-context"
      nextTopicTitle="Global Execution Context"
    />
  );
}
