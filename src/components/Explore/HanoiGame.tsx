import { useState } from 'react';

// Function to convert numbers to emoji digits
function numberToEmojis(number: number): string {
  const emojiDigits = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
  return number
    .toString()
    .split('')
    .map((digit) => emojiDigits[parseInt(digit)])
    .join('');
}

export function HanoiGame() {
  // Emojis for the three towers
  const targetEmojis = [ '🐙','🪸', '🐬']; // Updated playable emojis (Coral, Octopus, Dolphin)

  // Game state
  const [towers, setTowers] = useState<string[][]>([[], [], []]);
  const [moves, setMoves] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost' | null>(null);

  // Start/Restart the game
  const startGame = () => {
    setTowers([[...targetEmojis], [], []]); // All emojis start in the first tower
    setMoves(0);
    setGameStatus('playing');
  };

  // Handle emoji movement between towers
  const moveEmoji = (from: number, to: number) => {
    if (gameStatus !== 'playing') return;

    const fromTower = [...towers[from]];
    const toTower = [...towers[to]];

    // Ensure there's an emoji to move
    if (fromTower.length === 0) return;

    // Move the top emoji
    const emoji = fromTower.pop()!;
    toTower.push(emoji);

    // Update the state
    setTowers(
      towers.map((tower, index) =>
        index === from ? fromTower : index === to ? toTower : tower
      )
    );

    setMoves((prev) => {
      const newMoves = prev + 1;

      // Check for loss condition
      if (newMoves > 10) {
        setGameStatus('lost');
      }

      return newMoves;
    });

    // Check for win condition
    checkWinCondition();
  };

  // Corrected win condition
  const checkWinCondition = () => {
    const isWon = targetEmojis.every((emoji, index) =>
      towers[index].length === 1 && towers[index][0] === emoji
    );

    if (isWon) {
      setGameStatus('won');
    }
  };

  return (
    <div className="game-container max-w-3xl mx-auto text-center py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🌉🏰🌊</h1>

      {/* Start/Restart Button */}
      <button
        onClick={startGame}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-6"
      >
        {gameStatus === null || gameStatus === 'lost' ? '▶️' : '🔁'}
      </button>

      {/* Towers */}
      <div className="flex justify-around mb-6">
        {towers.map((tower, towerIndex) => (
          <div
            key={towerIndex}
            className="tower bg-blue-500 text-white p-4 rounded-lg shadow-md"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const fromIndex = parseInt(e.dataTransfer.getData('fromIndex'));
              moveEmoji(fromIndex, towerIndex);
            }}
          >
            <h2 className="text-4xl mb-4">
              {towerIndex === 0
                ? '🫀' // Heart (Coral)
                : towerIndex === 1
                ? '🧠' // Brain (Octopus)
                : '🫁'}
            </h2>
            <div className="emoji-container flex flex-col-reverse items-center">
              {tower.map((emoji, emojiIndex) => (
                <div
                  key={emojiIndex}
                  className={`emoji bg-white text-black p-2 rounded-lg shadow-md mb-2 ${
                    emojiIndex === tower.length - 1 ? '' : 'cursor-not-allowed opacity-50'
                  }`}
                  draggable={emojiIndex === tower.length - 1} // Only top item is draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData('fromIndex', towerIndex.toString())
                  }
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Status and Moves */}
      <p className="text-lg text-blue-700">Moves: {numberToEmojis(moves)}</p>

      {/* Popup for Win or Lose */}
      {gameStatus === 'won' && (
        <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="popup-content bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <p className="text-2xl mb-4">🎉 You Won! Great Job! 🎉</p>
            <button
              onClick={startGame}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {gameStatus === 'lost' && (
        <div className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="popup-content bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <p className="text-2xl mb-4">💀 Game Over! Try Again! 💀</p>
            <button
              onClick={startGame}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              🔄 Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
