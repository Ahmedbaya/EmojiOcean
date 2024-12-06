import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  title: string;
  description: string;
  blankText: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: '🧪 Ocean Chemistry: Acidity',
    description: 'Select the correct answer about ocean acidity.',
    blankText: 'The ocean absorbs CO2, which forms _______ acid.',
    options: [
      { id: 'a', text: 'Carbonic' },
      { id: 'b', text: 'Sulfuric' },
      { id: 'c', text: 'Nitric' },
      { id: 'd', text: 'Phosphoric' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 2,
    title: '🌊 Ocean Salinity',
    description: 'Select the correct measurement unit for salinity.',
    blankText: 'The salinity of seawater is typically measured in _______ per thousand.',
    options: [
      { id: 'a', text: 'Milliliters' },
      { id: 'b', text: 'Parts' },
      { id: 'c', text: 'Liters' },
      { id: 'd', text: 'Ounces' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 3,
    title: '💨 Ocean and Atmosphere',
    description: 'Select the correct gas that the ocean absorbs.',
    blankText: 'The ocean absorbs _______ from the atmosphere, helping regulate climate.',
    options: [
      { id: 'a', text: 'Oxygen' },
      { id: 'b', text: 'Carbon Dioxide' },
      { id: 'c', text: 'Nitrogen' },
      { id: 'd', text: 'Helium' },
    ],
    correctOptionId: 'b',
  },
];

export const ChemistryQuiz = () => {
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

          <p className="bg-white text-gray-800 p-4 rounded-lg mb-4 shadow-md">
            {question.blankText}
          </p>

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
