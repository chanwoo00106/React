import { FallbackProps } from "react-error-boundary";

const ErrorPage = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h3 className="text-lg">으윽 실패</h3>
      <button onClick={() => resetErrorBoundary()}>retry?</button>
    </div>
  );
};

export default ErrorPage;
