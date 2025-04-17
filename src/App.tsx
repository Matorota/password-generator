import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";
import StrengthMeter from "./components/StrengthMeter";
import GenerateButton from "./components/GenerateButton";
import { generatePasswordAndStrength } from "./components/GeneratePasswordCalculations";

function App() {
  const [password, setPassword] = useState("PTx1f5DaFX");
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [strength, setStrength] = useState("MEDIUM");

  const handleGeneratePassword = () => {
    const { generatedPassword, calculatedStrength } =
      generatePasswordAndStrength(length, options);
    setPassword(generatedPassword);
    setStrength(calculatedStrength);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Header />
      <Card>
        <PasswordDisplay password={password} />
        <div className="bg-gray-700 p-4   w-96 ">
          <PasswordOptions
            length={length}
            setLength={setLength}
            options={options}
            setOptions={setOptions}
          />
          <StrengthMeter strength={strength} />
          <GenerateButton onClick={handleGeneratePassword} />
        </div>
      </Card>
    </div>
  );
}

export default App;
