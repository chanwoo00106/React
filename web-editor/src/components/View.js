import React, { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

function View({ data }) {
  const [html, setHtml] = useState("");
  useEffect(() => {
    async function setUp() {
      const result = unified()
        .use(remarkParse)
        .use(remark2rehype)
        .use(rehypeStringify)
        .processSync(data)
        .toString();
      console.log(result);
      setHtml(result);
    }
    setUp();
  });
  return (
    <div className="code" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}

export default View;
