export function Globe() {
  return (
    <div className="relative w-64 h-64 mx-auto animate-float">
      {/* Spinning Earth */}
      <div className="absolute inset-0 flex items-center justify-center text-8xl animate-spin-slow">
        🌍
      </div>

      {/* Animated Emojis */}
      <div className="absolute top-0 left-4 animate-float text-4xl">🐠</div>
      <div className="absolute top-1/4 right-4 animate-float text-4xl">🐳</div>
      <div className="absolute bottom-1/4 left-4 animate-float text-4xl">🐚</div>
      <div className="absolute bottom-0 right-4 animate-float text-4xl">🌊</div>
    </div>
  );
}
