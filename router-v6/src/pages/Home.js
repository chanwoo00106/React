import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>Home 입니다.</h1>
      <p onClick={() => navigate(-1)}>이전으로</p>
      <p onClick={() => navigate(1)}>앞으로</p>
    </div>
  );
}
