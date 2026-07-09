import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="async/await"
      slug="async-await"
      fileName="learn/async-await.js"
      nextTopicSlug="fetch-api"
      nextTopicTitle="fetch API"
    />
  );
}
