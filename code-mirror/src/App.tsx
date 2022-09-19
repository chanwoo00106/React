import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  useEffect(() => {
    if (!ref.current) return;

    const startState = EditorState.create({
      doc: "hello world",
      extensions: [keymap.of(defaultKeymap)],
    });

    const view = new EditorView({
      state: startState,
      parent: ref.current,
    });

    setEditorView(view);
  }, [ref]);

  return (
    <div className="App">
      <div ref={ref}></div>
    </div>
  );
}

export default App;
