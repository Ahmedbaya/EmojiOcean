import React, { useState } from 'react';

export function EmojiTextGenerator() {
  const [text, setText] = useState<string>('');
  const emojis = ['🪸', '🐙', '🐬', '🌊', '🐠', '🧠', '🫀', '🫁'];

  const handleDrop = (emoji: string) => {
    setText((prevText) => prevText + emoji);
  };

  return (
    <div className="text-generator-container max-w-3xl mx-auto text-center py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🎨 Generate Text with Emojis</h1>

      {/* Emoji Area */}
      <div className="emoji-area flex justify-center flex-wrap gap-4 mb-6">
        {emojis.map((emoji, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', emoji)}
            className="emoji bg-white text-black p-4 rounded-lg shadow-md cursor-pointer"
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Drop Area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const emoji = e.dataTransfer.getData('text/plain');
          handleDrop(emoji);
        }}
        className="drop-area bg-gray-100 p-6 rounded-lg shadow-md mb-6"
      >
        <p className="text-lg text-gray-500 mb-2">Drag emojis here to create your text:</p>
        <div className="text-box text-xl text-black bg-white p-4 rounded-lg min-h-[100px]">
          {text}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Game
      </button>
    </div>
  );
}
