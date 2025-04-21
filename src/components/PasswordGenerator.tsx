import { useState } from "react";

import { generatePasswordAndStrength } from "../utils/generate-password-and-strength";
import { CalculactedStrength } from "../constants";
import { PasswordGenerationOptions } from "../types";

import PasswordDisplay from "./PasswordDisplay";
import PasswordOptions from "./PasswordOptions";
import StrengthMeter from "./StrengthMeter";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState<PasswordGenerationOptions>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const [strength, setStrength] = useState(CalculactedStrength.None);

  const handleGeneratePassword = () => {
    const { generatedPassword, calculatedStrength } =
      generatePasswordAndStrength(length, options);

    setPassword(generatedPassword);
    setStrength(calculatedStrength);
  };

  return (
    <div className="flex w-96 flex-col gap-8">
      <h1 className="text-custom-grey-600 mx-auto mb-0 w-full text-center text-2xl">
        Password Generator
      </h1>
      <PasswordDisplay password={password} />
      <div className="w-96 bg-gray-700 p-4">
        <PasswordOptions
          length={length}
          setLength={setLength}
          options={options}
          setOptions={setOptions}
        />
        <StrengthMeter strength={strength} />

        <button
          onClick={handleGeneratePassword}
          className="bg-green text-custom-grey-800 hover:bg-green w-full py-2 font-bold tracking-wide transition duration-200"
        >
          GENERATE →
        </button>
      </div>
    </div>
  );
}
