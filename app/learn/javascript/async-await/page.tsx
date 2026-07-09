import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="async/await"
      slug="async-await"
      fileName="learn/async-await.js"
      diagramImage="/javascript/async-await.png"
      nextTopicSlug="fetch-api"
      nextTopicTitle="fetch API"
    />
  );
}
