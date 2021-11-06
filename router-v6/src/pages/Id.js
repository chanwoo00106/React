import React from "react";
import { useParams } from "react-router";

export default function Id() {
  const { id } = useParams();
  return (
    <div>
      <h1>id는 {id}입니다</h1>
    </div>
  );
}
