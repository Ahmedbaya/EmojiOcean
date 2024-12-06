import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';

interface Current {
  id: string;
  name: string;
}

interface Zone {
  id: string;
  label: string;
}

interface DraggableCurrentProps {
  current: Current;
}

interface DroppableZoneProps {
  zone: Zone;
  onDrop: (zoneId: string, currentId: string) => void;
  assigned: Current | undefined;
}

interface DragItem {
  id: string;
}

interface Assignments {
  [key: string]: Current | undefined;
}

// Questions
const questions = [
  {
    id: 1,
    title: '💓 Ocean Circulation: Currents',
    description: 'Match the ocean currents 🌊 to their correct ocean zones 🌎.',
    correctPairs: { atlantic: 'gulf', pacific: 'kuroshio', southern: 'antarctic' },
    currents: [
      { id: 'gulf', name: '🌊 Gulf Stream' },
      { id: 'kuroshio', name: '🐋 Kuroshio Current' },
      { id: 'antarctic', name: '❄️ Antarctic Circumpolar Current' },
    ],
    zones: [
      { id: 'atlantic', label: '🌎 Atlantic Ocean' },
      { id: 'pacific', label: '🌏 Pacific Ocean' },
      { id: 'southern', label: '🌍 Southern Ocean' },
    ],
  },
  {
    id: 2,
    title: '🌬️ Wind-Driven Circulation',
    description: 'Match the currents to the winds that drive them.',
    correctPairs: { trade: 'equatorial', westerlies: 'gulf', polar: 'antarctic' },
    currents: [
      { id: 'equatorial', name: '🌊 Equatorial Current' },
      { id: 'gulf', name: '🌊 Gulf Stream' },
      { id: 'antarctic', name: '❄️ Antarctic Circumpolar Current' },
    ],
    zones: [
      { id: 'trade', label: '🌬️ Trade Winds' },
      { id: 'westerlies', label: '🌬️ Westerlies' },
      { id: 'polar', label: '🌬️ Polar Winds' },
    ],
  },
  {
    id: 3,
    title: '🌊 The Ocean and the Human Body',
    description: 'Match parts of the human body to their corresponding oceanic systems or processes.',
    correctPairs: {
      heart: 'circulatory',
      lungs: 'wind-driven',
      veins: 'submarine',
      brain: 'ecosystem',
    },
    currents: [
      { id: 'circulatory', name: '🌊 Circulatory Currents (Ocean Gyres)' },
      { id: 'wind-driven', name: '🌬️ Wind Currents (Global Winds)' },
      { id: 'submarine', name: '🌊 Submarine Currents (Deep Water Flow)' },
      { id: 'ecosystem', name: '🌍 Ocean Ecosystem (Food Chains)' },
    ],
    zones: [
      { id: 'heart', label: '❤️ Heart (Pumps Blood)' },
      { id: 'lungs', label: '🫁 Lungs (Respiration)' },
      { id: 'veins', label: '🩸 Veins (Transport)' },
      { id: 'brain', label: '🧠 Brain (Control Center)' },
    ],
  },
  {
    id: 4,
    title: '🌊 The Ocean’s Skeleton',
    description: 'Match parts of the human skeletal system to ocean features.',
    correctPairs: {
      backbone: 'mid-ocean-ridge',
      ribs: 'continental-shelf',
      pelvis: 'abyssal-plain',
    },
    currents: [
      { id: 'mid-ocean-ridge', name: '🌊 Mid-Ocean Ridge (Tectonic Spine)' },
      { id: 'continental-shelf', name: '🌊 Continental Shelf (Coastal Regions)' },
      { id: 'abyssal-plain', name: '🌊 Abyssal Plain (Deep Ocean Floor)' },
    ],
    zones: [
      { id: 'backbone', label: '🦴 Backbone (Spinal Column)' },
      { id: 'ribs', label: '🦴 Ribs (Protective Framework)' },
      { id: 'pelvis', label: '🦴 Pelvis (Supportive Structure)' },
    ],
  },
  {
    id: 5,
    title: '🌊 Ocean’s Digestive System',
    description: 'Match parts of the human digestive system to oceanic nutrient processes.',
    correctPairs: {
      stomach: 'nutrient-upwelling',
      intestines: 'sediment-transport',
      mouth: 'river-runoff',
    },
    currents: [
      { id: 'nutrient-upwelling', name: '🌊 Nutrient Upwelling (Feeding Ocean Life)' },
      { id: 'sediment-transport', name: '🌊 Sediment Transport (Seafloor Movement)' },
      { id: 'river-runoff', name: '🌊 River Runoff (Nutrient Input)' },
    ],
    zones: [
      { id: 'stomach', label: '🍴 Stomach (Breaks Down Food)' },
      { id: 'intestines', label: '🫄 Intestines (Absorbs Nutrients)' },
      { id: 'mouth', label: '👄 Mouth (Intake of Food)' },
    ],
  },
];

const DraggableCurrent = ({ current }: DraggableCurrentProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'current',
    item: { id: current.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      style={{ marginBottom: '8px' }}
    >
      {current.name}
    </div>
  );
};

const DroppableZone = ({ zone, onDrop, assigned }: DroppableZoneProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'current',
    drop: (item: DragItem) => onDrop(zone.id, item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 bg-gray-200 rounded-lg shadow-md border-2 ${
        isOver ? 'border-blue-500' : 'border-transparent'
      }`}
      style={{ minHeight: '80px', marginBottom: '16px' }}
    >
      <div className="text-lg font-bold mb-2">{zone.label}</div>
      {assigned ? (
        <div className="p-2 bg-blue-300 text-white rounded-lg shadow-md">
          {assigned.name}
        </div>
      ) : (
        <div className="text-gray-500">➡️ Drop Here</div>
      )}
    </div>
  );
};

export const CirculationQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [assignments, setAssignments] = useState<Assignments>({});
  const [globalAssignments, setGlobalAssignments] = useState<Assignments>({});
  const [score, setScore] = useState(0); // Counter for correct answers
  const [showResults, setShowResults] = useState(false);
  const [isAllCorrect, setIsAllCorrect] = useState(false); // Track if all answers are correct for enabling "Next Quiz"

  const question = questions[currentQuestion];

  const handleDrop = (zoneId: string, currentId: string) => {
    setAssignments((prev) => ({
      ...prev,
      [zoneId]: question.currents.find((current) => current.id === currentId),
    }));
  };

  const handleNextQuestion = () => {
    const correctPairs = question.correctPairs;

    // Check if all answers in the current question are correct
    const isQuestionAllCorrect = Object.entries(correctPairs).every(
      ([zoneId, currentId]) => assignments[zoneId]?.id === currentId
    );

    // If all answers are correct, increment the score
    if (isQuestionAllCorrect) {
      setScore((prev) => prev + 1);
      setIsAllCorrect(true);
    } else {
      setIsAllCorrect(false);
    }

    // Store the current question assignments globally
    setGlobalAssignments((prev) => ({
      ...prev,
      ...assignments,
    }));

    // Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAssignments({});
    } else {
      setShowResults(true);
    }
  };

  const renderResults = () => (
    <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">🎉 Quiz Results</h2>
      <p className="text-xl mb-6">Your Score: {score} / {questions.length}</p>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={q.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold">{index + 1}. {q.title}</h3>
            <ul className="list-disc list-inside ml-4">
              {Object.entries(q.correctPairs).map(([zoneId, currentId]) => {
                const userResponse = globalAssignments[zoneId];
                const correctResponse = q.currents.find(c => c.id === currentId);
                const isCorrect = userResponse?.id === currentId;

                return (
                  <li key={zoneId} className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                    {q.zones.find(z => z.id === zoneId)?.label}: {userResponse?.name || 'No Answer'} 
                    {isCorrect ? ' ✅' : ` ❌ (Correct: ${correctResponse?.name})`}
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
          disabled={!isAllCorrect}
          onClick={() => alert('Proceeding to the next quiz!')}
          className={`px-6 py-3 rounded-lg transition ${
            isAllCorrect
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
        >
          Next Quiz
        </button>
      </div>
    </div>
  );

  return (
    <DndProvider backend={HTML5Backend}>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Draggable Items</h2>
                {question.currents.map((current) => (
                  <DraggableCurrent key={current.id} current={current} />
                ))}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Droppable Zones</h2>
                {question.zones.map((zone) => (
                  <DroppableZone
                    key={zone.id}
                    zone={zone}
                    onDrop={handleDrop}
                    assigned={assignments[zone.id]}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question ➡️' : 'Finish Quiz'}
              </button>
            </div>
          </>
        )}
      </div>
    </DndProvider>
  );
};
