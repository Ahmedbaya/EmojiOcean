
interface BiologyCardProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
}

export function BiologyCard({ emoji, title, description, onClick }: BiologyCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
    >
      <div className="text-4xl mb-4 animate-bounce-gentle">{emoji}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-blue-700 text-sm">{description}</p>
    </button>
  );
}