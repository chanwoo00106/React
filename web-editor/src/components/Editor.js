import React, { useRef } from "react";
import { useNavigate } from "react-router";
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

function Editor({ data, setData }) {
  const editorRef = useRef();
  const navigate = useNavigate();

  const onClick = () => {
    setData(editorRef.current.getInstance().getMarkdown());
    navigate("/");
  };

  return (
    <>
      <MdEditor
        previewStyle="vertical"
        initialEditType="markdown"
        initialValue={data}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={editorRef}
        height={`600px`}
      />
      <button
        style={{
          padding: "10px 20px",
          outline: "none",
          border: "none",
          borderRadius: "10px",
          marginTop: "10px",
        }}
        onClick={onClick}
      >
        submit
      </button>
    </>
  );
}

export default Editor;
