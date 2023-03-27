import { ReactElement } from "react";

interface Props {
  isLoading: boolean;
  children: ReactElement;
}

const Loading = ({ isLoading, children }: Props) => {
  if (!isLoading) return <>{children}</>;

  return <h1>Loading...</h1>;
};

export default Loading;
