import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Arrow Functions"
      slug="arrow-functions"
      fileName="learn/arrow-functions.js"
      diagramImage="/javascript/arrow-functions.png"
      nextTopicSlug="higher-order-functions"
      nextTopicTitle="Higher Order Functions"
    />
  );
}
