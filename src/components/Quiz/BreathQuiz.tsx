import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  title: string;
  description: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: '🌬️ Ocean Breathing: Winds',
    description: 'Which wind system drives the largest ocean currents?',
    options: [
      { id: 'a', text: '🌬️ Trade Winds' },
      { id: 'b', text: '🌬️ Polar Winds' },
      { id: 'c', text: '🌬️ Westerlies' },
      { id: 'd', text: '🌬️ Local Winds' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 2,
    title: '🌊 Ocean Circulation',
    description: 'What is the main driver of deep ocean circulation?',
    options: [
      { id: 'a', text: '🌡️ Temperature and Salinity Differences' },
      { id: 'b', text: '🌬️ Surface Winds' },
      { id: 'c', text: '🌞 Solar Heating' },
      { id: 'd', text: '🌪️ Hurricanes' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 3,
    title: '💨 Ocean and Atmosphere',
    description: 'Which process links the ocean and atmosphere the most?',
    options: [
      { id: 'a', text: '🌡️ Heat Exchange' },
      { id: 'b', text: '💨 Carbon Dioxide Absorption' },
      { id: 'c', text: '🌬️ Wind Currents' },
      { id: 'd', text: '🌧️ Rainfall' },
    ],
    correctOptionId: 'b',
  },
];

export const OceanBreathingQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOptionId === question.correctOptionId) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setShowResults(true);
    }
  };

  const renderResults = () => {
    const allCorrect = score === questions.length;

    return (
      <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">🎉 Quiz Results</h2>
        <p className="text-xl mb-6">Your Score: {score} / {questions.length}</p>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={q.id} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold">{index + 1}. {q.title}</h3>
              <ul className="list-disc list-inside ml-4">
                {q.options.map((option) => {
                  const isCorrect = option.id === q.correctOptionId;

                  return (
                    <li key={option.id} className={isCorrect ? 'text-green-600' : 'text-gray-600'}>
                      {option.text} {isCorrect && '✅'}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Restart Quiz
          </button>
          <button
            disabled={!allCorrect}
            onClick={() => alert('Proceeding to the next quiz!')}
            className={`px-6 py-3 rounded-lg transition ${
              allCorrect
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            Next Quiz
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white p-8 relative">
      <Link
        to="/quiz"
        className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100"
      >
        Back to Quiz Menu
      </Link>

      {showResults ? (
        renderResults()
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-6">{question.title}</h1>
          <p className="mb-4">{question.description}</p>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${
                  selectedOptionId === option.id
                    ? 'bg-blue-300 border-blue-400 text-white'
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOptionId}
              className={`px-6 py-3 rounded-lg transition ${
                selectedOptionId
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question ➡️' : 'Finish Quiz'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
