import React, { useState } from 'react';

export function EmojiTextGenerator() {
  const [text, setText] = useState<string>(''); // Text displayed under the box
  const emojis = [
    { emoji: '🪸', text: 'Coral reefs protect coastal areas and host marine life.' },
    { emoji: '🐙', text: 'Octopuses are intelligent creatures of the ocean depths.' },
    { emoji: '🐬', text: 'Dolphins are highly social and often travel in pods.' },
    { emoji: '🌊', text: 'Ocean waves shape our coasts and influence weather patterns.' },
    { emoji: '🐠', text: 'Tropical fish add vibrant colors to coral reefs.' },
    { emoji: '🧠', text: 'Brain corals form large reef structures in the ocean.' },
    { emoji: '🫀', text: 'The ocean is the heart of Earth, pumping life into our planet.' },
    { emoji: '🫁', text: 'Oceans are Earth’s lungs, producing most of the oxygen we breathe.' },
  ]; // Emoji and their corresponding text related to the theme

  // Handle emoji drop
  const handleDrop = (emojiText: string) => {
    setText(emojiText); // Set the text based on the dropped emoji
  };

  return (
    <div className="text-generator-container max-w-3xl mx-auto text-center py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🎨 Generate Text with Emojis</h1>

      {/* Emoji Area */}
      <div className="emoji-area flex justify-center flex-wrap gap-4 mb-6">
        {emojis.map((item, index) => (
          <div
            key={index}
            draggable // Makes emoji draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', item.text)} // Send emoji text on drag
            className="emoji bg-white text-black p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
          >
            {item.emoji}
          </div>
        ))}
      </div>

      {/* Drop Area */}
      <div
        onDragOver={(e) => e.preventDefault()} // Allow drop
        onDrop={(e) => {
          const droppedText = e.dataTransfer.getData('text/plain'); // Get emoji text
          handleDrop(droppedText); // Update text
        }}
        className="drop-area bg-gray-100 p-6 rounded-lg shadow-md mb-6"
        style={{
          minHeight: '150px', // Ensure drop area is visible
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p className="text-lg text-gray-500 mb-2">Drag emojis here to see related facts:</p>
      </div>

      {/* Text Display */}
      <div className="text-display text-xl text-black mt-4">
        {text && <p>{text}</p>} {/* Display the text only when it's not empty */}
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()} // Navigate back
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Game
      </button>
    </div>
  );
}
