import { CalculactedStrength } from "../constants";

type StrengthLevels = Record<
  CalculactedStrength,
  { color: string; bars: number; text: string }
>;

type Props = {
  strength: CalculactedStrength;
};

export default function StrengthMeter({ strength }: Props) {
  const strengthLevels: StrengthLevels = {
    none: { color: "bg-gray-600", bars: 0, text: "" },
    tooWeak: { color: "bg-red", bars: 1, text: "Too Weak!" },
    weak: { color: "bg-orange", bars: 2, text: "Weak" },
    medium: { color: "bg-yellow", bars: 3, text: "Medium" },
    strong: { color: "bg-green", bars: 4, text: "Strong" },
  };

  const currentStrength = strengthLevels[strength];

  return (
    <div className="mt-4 mb-4 flex items-center justify-between bg-gray-900 p-4">
      <p className="text-sm">STRENGTH</p>
      <div className="flex items-center">
        <p className="mr-2 text-sm font-bold">
          {strengthLevels[strength].text}
        </p>
        <div className="flex space-x-1">
          {[...Array(4)].map((_undefinedParameter, index) => (
            <div key={index} className={`h-6 w-2 ${currentStrength.color}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
