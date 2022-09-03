import { FC } from "react";

interface X_mark {
  onClick: () => void;
}

const X_mark: FC<X_mark> = ({ onClick }) => {
  return (
    <svg
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width="1.5rem"
      height="1.5rem"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default X_mark;
