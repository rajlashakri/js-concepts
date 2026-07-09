import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Functions"
      slug="functions"
      fileName="learn/functions.js"
      diagramImage="/javascript/functions.png"
      nextTopicSlug="arrow-functions"
      nextTopicTitle="Arrow Functions"
    />
  );
}
