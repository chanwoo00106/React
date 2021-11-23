import React, { useRef } from "react";
import Prism from "prismjs";
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import "prismjs/themes/prism.css";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as MdEditor } from "@toast-ui/react-editor";

import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

function Editor() {
  const editorRef = useRef();
  return (
    <>
      <MdEditor
        previewStyle="vertical"
        initialEditType="markdown"
        initialValue="# 글 작성"
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={editorRef}
        height={`600px`}
      />
      <button
        onClick={() => console.log(editorRef.current.getInstance().getHTML())}
      >
        click
      </button>
    </>
  );
}

export default Editor;
