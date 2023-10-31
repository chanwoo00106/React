import {
  forwardRef,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${props.className}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
