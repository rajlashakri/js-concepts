import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="ES Modules"
      slug="es-modules"
      fileName="learn/es-modules.js"
      diagramImage="/javascript/es-modules.png"
      nextTopicSlug="commonjs"
      nextTopicTitle="CommonJS"
    />
  );
}
