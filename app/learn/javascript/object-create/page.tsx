import GenericJavaScriptLessonPage from "@/components/GenericJavaScriptLessonPage";

export default function Page() {
  return (
    <GenericJavaScriptLessonPage
      topic="Object.create()"
      slug="object-create"
      fileName="learn/object-create.js"
      diagramImage="/javascript/object-create.png"
      nextTopicSlug="constructor-functions"
      nextTopicTitle="Constructor Functions"
    />
  );
}
