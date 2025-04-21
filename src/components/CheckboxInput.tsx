import { ChangeEvent } from "react";

type Props = {
  id: string;
  checked: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxInput({ id, label, checked, onChange }: Props) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-green mr-2"
      />
      <label htmlFor={id} className="text-sm capitalize">
        {label}
      </label>
    </div>
  );
}
