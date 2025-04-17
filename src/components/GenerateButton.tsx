function GenerateButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-500 hover:bg-green-600 text-white py-2  font-bold tracking-wide transition duration-200"
    >
      GENERATE →
    </button>
  );
}

export default GenerateButton;
