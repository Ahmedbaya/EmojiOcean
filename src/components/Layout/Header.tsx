import React from 'react';
import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-blue-500/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          EmojiOcean <span className="text-3xl">🌊</span>
        </h1>
        <nav>
          <button className="text-white hover:text-blue-100 transition-colors">
            <Compass className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}