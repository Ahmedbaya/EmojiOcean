
export function Globe() {
  return (
    <div className="relative w-64 h-64 mx-auto animate-float">
      <div className="absolute inset-0 flex items-center justify-center text-8xl animate-spin-slow">
        🌍
      </div>
      <div className="absolute top-0 left-0 animate-bounce-delayed-1">🐠</div>
      <div className="absolute top-1/4 right-0 animate-bounce-delayed-2">🐳</div>
      <div className="absolute bottom-1/4 left-0 animate-bounce-delayed-3">🐚</div>
      <div className="absolute bottom-0 right-0 animate-bounce-delayed-4">🌊</div>
    </div>
  );
}