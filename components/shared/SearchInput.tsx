import { Input } from "@/components/ui/input";
interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string; 
}
export default function SearchInput({
  placeholder,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className="flex w-full max-w-sm items-center bg-input rounded-xl px-2.5 py-.5">
      <SearchIcon className="h-4 w-4 mr-2.5" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full border-0 focus:outline-none shadow-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {}

function SearchIcon(props: SearchIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
