import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Global Execution Context"
      slug="global-execution-context"
      fileName="learn/global-execution-context.js"
      diagramImage="/javascript/global-execution-context.png"
      nextTopicSlug="call-stack"
      nextTopicTitle="Call Stack"
    />
  );
}
