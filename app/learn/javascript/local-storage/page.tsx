import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Local Storage"
      slug="local-storage"
      fileName="learn/local-storage.js"
      nextTopicSlug="session-storage"
      nextTopicTitle="Session Storage"
    />
  );
}
