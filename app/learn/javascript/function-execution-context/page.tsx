import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Function Execution Context"
      slug="function-execution-context"
      fileName="learn/function-execution-context.js"
      diagramImage="/javascript/function-execution-context.png"
      nextTopicSlug="call-stack"
      nextTopicTitle="Call Stack"
    />
  );
}
