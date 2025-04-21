import { CalculactedStrength } from "../constants";
import { PasswordGenerationOptions } from "../types";

export function generatePasswordAndStrength(
  length: number,
  options: PasswordGenerationOptions,
): { generatedPassword: string; calculatedStrength: CalculactedStrength } {
  const { uppercase, lowercase, numbers, symbols } = options;

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let charPool = "";
  if (uppercase) charPool += upperCaseChars;
  if (lowercase) charPool += lowerCaseChars;
  if (numbers) charPool += numberChars;
  if (symbols) charPool += symbolChars;

  if (charPool.length === 0) {
    return {
      generatedPassword: "",
      calculatedStrength: CalculactedStrength.None,
    };
  }

  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    generatedPassword += charPool[randomIndex];
  }

  let calculatedStrength: CalculactedStrength = CalculactedStrength.None;

  if (length < 4) {
    calculatedStrength = CalculactedStrength.TooWeak;
  } else if (length < 6 || (!uppercase && !lowercase && !numbers)) {
    calculatedStrength = CalculactedStrength.Weak;
  } else if (
    (uppercase && !lowercase && !numbers && !symbols) ||
    (!uppercase && lowercase && !numbers && !symbols)
  ) {
    calculatedStrength = CalculactedStrength.Weak;
  } else if (length < 15 || (uppercase && lowercase && !numbers && !symbols)) {
    calculatedStrength = CalculactedStrength.Medium;
  } else {
    calculatedStrength = CalculactedStrength.Strong;
  }

  return { generatedPassword, calculatedStrength };
}
