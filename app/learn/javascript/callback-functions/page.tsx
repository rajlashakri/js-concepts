import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Callback Functions"
      slug="callback-functions"
      fileName="learn/callback-functions.js"
      diagramImage="/javascript/callback-functions.png"
      nextTopicSlug="iife"
      nextTopicTitle="IIFE"
    />
  );
}
