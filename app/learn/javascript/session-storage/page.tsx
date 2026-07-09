import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Session Storage"
      slug="session-storage"
      fileName="learn/session-storage.js"
      diagramImage="/javascript/session-storage.png"
      nextTopicSlug="cookies"
      nextTopicTitle="Cookies"
    />
  );
}
