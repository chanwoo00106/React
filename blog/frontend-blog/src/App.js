import { Routes, Route } from 'react-router-dom';
import * as P from './pages';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<P.PostListPage />} />
        <Route path="/@:username" element={<P.PostListPage />} />
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/register" element={<P.RegisterPage />} />
        <Route path="/write" element={<P.WritePage />} />
        <Route path="/@:username/:postId" element={<P.PostPage />} />
      </Routes>
    </>
  );
}

export default App;
