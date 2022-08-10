import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  // category 뒤에 있는 ?는 값이 선택적이라는 의미
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
