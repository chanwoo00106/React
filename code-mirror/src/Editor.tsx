import React, { useEffect } from "react";
import useCodeMirror from "./useCodeMirror";

interface Props {}

const Editor: React.FC<Props> = () => {
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: "hello world",
    onChange: () => {},
  });

  useEffect(() => {
    if (editorView) {
      //
    }
  }, [editorView]);

  return <div ref={refContainer} className="editor-wrapper"></div>;
};

export default Editor;
