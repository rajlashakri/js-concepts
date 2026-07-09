import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Local Storage"
      slug="local-storage"
      fileName="learn/local-storage.js"
      diagramImage="/javascript/local-storage.png"
      nextTopicSlug="session-storage"
      nextTopicTitle="Session Storage"
    />
  );
}
