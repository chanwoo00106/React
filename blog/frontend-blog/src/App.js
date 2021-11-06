import { Routes, Route } from 'react-router-dom';
import * as P from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.PostListPage />} />
      <Route path="/@:username" element={<P.PostListPage />} />
      <Route path="/login" element={<P.LoginPage />} />
      <Route path="/register" element={<P.RegisterPage />} />
      <Route path="/write" element={<P.WritePage />} />
      <Route path="/@:username/:postId" element={<P.PostPage />} />
    </Routes>
  );
}

export default App;
