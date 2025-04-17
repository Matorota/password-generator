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

  // Character pools
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

  // Generate password
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    generatedPassword += charPool[randomIndex];
  }

  // Calculate strength
  let calculatedStrength = "WEAK";
  if (length < 4) {
    calculatedStrength = "NOTHING";
  } else if (length < 6 || (!uppercase && !lowercase && !numbers)) {
    calculatedStrength = "WEAK";
  } else if (
    (uppercase && !lowercase && !numbers && !symbols) || // Only uppercase
    (!uppercase && lowercase && !numbers && !symbols) // Only lowercase
  ) {
    calculatedStrength = "WEAK";
  } else if (
    length < 15 ||
    (uppercase && lowercase && !numbers && !symbols) // Only uppercase and lowercase
  ) {
    calculatedStrength = "MEDIUM";
  } else {
    calculatedStrength = "STRONG";
  }

  return { generatedPassword, calculatedStrength };
}
