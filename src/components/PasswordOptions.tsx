import { PasswordGenerationOptions } from "../types";
import CheckboxInput from "./CheckboxInput";

type Props = {
  length: number;
  setLength: (length: number) => void;
  options: PasswordGenerationOptions;
  setOptions: (options: PasswordGenerationOptions) => void;
};

export default function PasswordOptions({
  length,
  setLength,
  options,
  setOptions,
}: Props) {
  const toggleOption = (option: keyof PasswordGenerationOptions) => {
    setOptions({ ...options, [option]: !options[option] });
  };

  return (
    <div className="w-full bg-gray-700 p-4">
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor="length" className="text-sm">
          Character Length
        </label>
        <span className="text-lg font-bold">{length}</span>
      </div>
      <input
        id="length"
        type="range"
        min="4"
        max="20"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="accent-green mb-4 w-full"
      />
      <div className="space-y-2">
        {Object.keys(options).map((option) => (
          <CheckboxInput
            key={option}
            id={option}
            label={`Include ${option.charAt(0).toUpperCase() + option.slice(1)}`}
            checked={options[option as keyof PasswordGenerationOptions]}
            onChange={() =>
              toggleOption(option as keyof PasswordGenerationOptions)
            }
          />
        ))}
      </div>
    </div>
  );
}
