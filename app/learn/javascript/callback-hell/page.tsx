import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Callback Hell"
      slug="callback-hell"
      fileName="learn/callback-hell.js"
      diagramImage="/javascript/callback-hell.png"
      nextTopicSlug="promises"
      nextTopicTitle="Promises"
    />
  );
}
