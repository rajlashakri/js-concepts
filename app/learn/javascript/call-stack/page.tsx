import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Call Stack"
      slug="call-stack"
      fileName="learn/call-stack.js"
      diagramImage="/javascript/call-stack.png"
      nextTopicSlug="hoisting"
      nextTopicTitle="Hoisting"
    />
  );
}
