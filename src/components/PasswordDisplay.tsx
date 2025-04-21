import { toast } from "sonner";
import copyImg from "../assets/copy.svg";

type Props = {
  password: string;
};

export default function PasswordDisplay({ password }: Props) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast("Password copied to clipboard!", {
      style: { background: "#a4ffa4", color: "#24232c" },
    });
  };

  return (
    <div className="mb-6 flex w-96 items-center justify-between bg-gray-700 p-4">
      <input disabled value={password} placeholder="P4$5W0rD!" />
      <button
        onClick={copyToClipboard}
        className="hover:cursor-pointer hover:opacity-80"
      >
        <img src={copyImg} alt="Copy Icon" />
      </button>
    </div>
  );
}
