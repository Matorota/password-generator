export function generatePasswordAndStrength(
  length: number,
  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
) {
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
    return { generatedPassword: "", calculatedStrength: "NOTHING" };
  }

  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    generatedPassword += charPool[randomIndex];
  }

  let calculatedStrength = "WEAK";
  if (length < 4) {
    calculatedStrength = "NOTHING";
  } else if (length < 6 || (!uppercase && !lowercase && !numbers)) {
    calculatedStrength = "WEAK";
  } else if (
    (uppercase && !lowercase && !numbers && !symbols) ||
    (!uppercase && lowercase && !numbers && !symbols)
  ) {
    calculatedStrength = "WEAK";
  } else if (length < 15 || (uppercase && lowercase && !numbers && !symbols)) {
    calculatedStrength = "MEDIUM";
  } else {
    calculatedStrength = "STRONG";
  }

  return { generatedPassword, calculatedStrength };
}
