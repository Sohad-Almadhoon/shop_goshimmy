import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const CustomSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        disabled={disabled}
        className={twMerge(
          "outline-none rounded-lg bg-inherit py-2 px-5 w-full bg-input",
          "pr-14",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}>
        {children}
      </select>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
