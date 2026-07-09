import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="var vs let vs const"
      slug="var-vs-let-vs-const"
      fileName="learn/var-vs-let-vs-const.js"
      diagramImage="/javascript/var-vs-let-vs-const.png"
      nextTopicSlug="data-types"
      nextTopicTitle="Data Types"
    />
  );
}
