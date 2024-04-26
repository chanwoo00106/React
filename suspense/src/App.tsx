import { Suspense } from "react";
import PostList from "./PostList";
import Loading from "./Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

function App() {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <main>
      <h1 className="text-3xl">hello world</h1>

      <ErrorBoundary FallbackComponent={ErrorPage} onReset={reset}>
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default App;
