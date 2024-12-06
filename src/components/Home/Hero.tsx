import { Header } from '../Layout/Header'; // Corrected path
import { Globe } from './Globe';
import { HanoiGame } from '../Explore/HanoiGame'; // Ensure the correct import path
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const navigate = useNavigate();

  return (
    <>
    <div className='bg-gradient-to-b from-blue-400 to-blue-600 text-white'>
    <section className="min-h-screen flex flex-col items-center justify-center  px-4 pt-16 h-screen">
      {/* Header Component */}
      <Header />

      {/* Main Globe Section */}
      <Globe />

      {/* Quiz Button */}
      <button
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mt-4"
        onClick={() => navigate('/quiz')}
      >
        Quiz 🧭
      </button>

      {/* Emoji Text Generator Button */}
      <button
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mt-4"
        onClick={() => navigate('/emoji-text-generator')}
      >
        Emoji Text Generator 🎨
      </button>

      {/* Scroll to Bottom Button */}
      <button
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 mt-4 "
        onClick={scrollToBottom}
      >
        ⬇️
      </button>
      
    </section>
    <HanoiGame />
    </div>
    </>
  );
}
