import { Globe } from './Globe';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 text-white px-4 pt-16">
      <Globe />
      <h2 className="text-2xl md:text-3xl text-center mt-8 mb-6">
        Bienvenue dans EmojiOcean : Découvrez comment l'océan ressemble à un corps humain
      </h2>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
        Explorer 🧭
      </button>
    </section>
  );
}