import { FC } from "react";

interface Bars_3Props {
  onClick: () => void;
}

const Bars_3: FC<Bars_3Props> = ({ onClick }) => {
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export default Bars_3;
