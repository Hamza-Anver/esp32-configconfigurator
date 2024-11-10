import TitleBar from "@/components/titlebar";
import EditorCard from "@/components/editorcard";

export default function Home() {
  return (
    <>
      <TitleBar />
      <div style={{ padding: '20px' }}>
        <EditorCard />
      </div>
    </>
  );
}
