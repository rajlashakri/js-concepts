import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="CommonJS"
      slug="commonjs"
      fileName="learn/commonjs.js"
      diagramImage="/javascript/commonjs.png"
      nextTopicSlug="iterators"
      nextTopicTitle="Iterators"
    />
  );
}
