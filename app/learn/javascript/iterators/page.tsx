import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Iterators"
      slug="iterators"
      fileName="learn/iterators.js"
      diagramImage="/javascript/iterators.png"
      nextTopicSlug="generators"
      nextTopicTitle="Generators"
    />
  );
}
