import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Callbacks"
      slug="callbacks"
      fileName="learn/callbacks.js"
      diagramImage="/javascript/callbacks.png"
      nextTopicSlug="callback-hell"
      nextTopicTitle="Callback Hell"
    />
  );
}
