import {
  forwardRef,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${props.className}`}
    />
  );
});

Button.displayName = "Button";

export default Button;
