import React from "react";
// import useCodeMirror from "./useCodeMirror";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView, keymap, highlightActiveLine } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { history, historyKeymap } from "@codemirror/history";
import { indentOnInput } from "@codemirror/language";
import { bracketMatching } from "@codemirror/matchbrackets";
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { javascript } from "@codemirror/lang-javascript";

interface Props {}

const Editor: React.FC<Props> = () => {
  return (
    <CodeMirror
      extensions={[
        keymap.of([...defaultKeymap, ...(historyKeymap as any)]),
        // lineNumbers(),
        // highlightActiveLineGutter(),
        // history(),
        // indentOnInput(),
        // bracketMatching(),
        // defaultHighlightStyle.fallback,
        highlightActiveLine(),
        javascript(),
        EditorView.lineWrapping,
        // EditorView.updateListener.of((update) => {
        //   if (update.changes) {
        //     onChange && onChange(update.state);
        //   }
        // }),
      ]}
    />
  );
};

export default Editor;
