import React from "react";
import { Viewer } from "@toast-ui/react-editor";

function View({ data }) {
  return <Viewer initialValue={data} />;
}

export default View;
