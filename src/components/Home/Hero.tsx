import { Globe } from './Globe';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 text-white px-4 pt-16">
      <Globe />
      
      {/* Updated Explorer Button with Link */}
      <Link to="/quiz">
        <button
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mt-4"
        >
          Explorer 🧭
        </button>
      </Link>

      {/* Existing Scroll Button */}
      <button
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mt-4"
        onClick={scrollToBottom}
      >
        ⬇️
      </button>
    </section>
  );
}