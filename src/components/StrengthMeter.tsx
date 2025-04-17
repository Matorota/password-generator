function StrengthMeter({ strength }: { strength: string }) {
  const strengthLevels = {
    NOTHING: { color: "bg-red-500", bars: 1 },
    WEAK: { color: "bg-red-500", bars: 2 },
    MEDIUM: { color: "bg-yellow-500", bars: 3 },
    STRONG: { color: "bg-green-500", bars: 4 },
  };

  const currentStrength = strengthLevels[
    strength as keyof typeof strengthLevels
  ] || {
    color: "bg-gray-600",
    bars: 0,
  };

  return (
    <div className="p-4 bg-gray-900 flex items-center justify-between mb-4 mt-4">
      <span className="text-sm">STRENGTH</span>
      <div className="flex items-center">
        <span className="text-sm font-bold mr-2">{strength}</span>
        <div className="flex space-x-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-6 ${
                i < currentStrength.bars ? currentStrength.color : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrengthMeter;
