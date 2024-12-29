import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Correct forwardRef function definition
const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          "outline-none rounded-lg bg-inherit  py-2 px-4 w-full",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomInput.displayName = "CustomInput"; // Set display name for forwardRef

export default CustomInput;
