function PasswordDisplay({ password }: { password: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex items-center justify-between bg-gray-700 p-4  mb-6   w-96">
      <span className="text-lg font-mono text-white">{password}</span>
      <button
        onClick={copyToClipboard}
        className="text-green-400 hover:text-green-500 transition duration-200"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"

            // short term solution for img found on stackoverflow
            //d="M8 16h8m-4-4v8m4-8a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default PasswordDisplay;
