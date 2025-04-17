function PasswordOptions({
  length,
  setLength,
  options,
  setOptions,
}: {
  length: number;
  setLength: (value: number) => void;
  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
  setOptions: (value: any) => void;
}) {
  const toggleOption = (option: keyof typeof options) => {
    setOptions({ ...options, [option]: !options[option] });
  };

  return (
    <div className="bg-gray-700 p-4  w-full">
      <div className="flex items-center justify-between mb-2">
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
        className="w-full mb-4 accent-green-500"
      />
      <div className="space-y-2">
        {Object.keys(options).map((option) => (
          <div key={option} className="flex items-center">
            <input
              id={option}
              type="checkbox"
              checked={options[option as keyof typeof options]}
              onChange={() => toggleOption(option as keyof typeof options)}
              className="mr-2 accent-green-500"
            />
            <label htmlFor={option} className="text-sm capitalize">
              Include {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PasswordOptions;
