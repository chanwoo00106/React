import { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, highlightActiveLine } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { history /* historyKeymap */ } from "@codemirror/history";
import { indentOnInput } from "@codemirror/language";
import { bracketMatching } from "@codemirror/matchbrackets";
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { javascript } from "@codemirror/lang-javascript";
import type React from "react";

interface Props {
  initialDoc: string;
  onChange?: (state: EditorState) => void;
}

const useCodeMirror = <T extends Element>({
  initialDoc,
  onChange,
}: Props): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContainer = useRef<T>(null);
  const [editorView, setEditorView] = useState<EditorView>();

  useEffect(() => {
    if (!refContainer.current) return;

    const startState = EditorState.create({
      doc: initialDoc,
      extensions: [
        keymap.of([...defaultKeymap]),
        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        indentOnInput(),
        bracketMatching(),
        defaultHighlightStyle.fallback,
        highlightActiveLine(),
        javascript(),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            onChange && onChange(update.state);
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: refContainer.current,
    });

    setEditorView(view);
  }, [refContainer]);

  return [refContainer, editorView];
};

export default useCodeMirror;
