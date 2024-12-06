import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Home/Hero';
import Quiz from './components/Quiz/Quiz';
import { CirculationQuiz } from './components/Quiz/CirculationQuiz';
import {OceanBreathingQuiz} from './components/Quiz/BreathQuiz'
import {ChemistryQuiz} from './components/Quiz/ChemistryQuiz'


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Hero />} />

        {/* Main Quiz Route */}
        <Route path="/quiz" element={<Quiz />} />

        {/* Individual Quiz Routes */}
        <Route path="/quiz/circulation" element={<CirculationQuiz />} />
         <Route path="/quiz/breathing" element={<OceanBreathingQuiz/>} />
        <Route path="/quiz/chemistry" element={<ChemistryQuiz />} />
       {/* <Route path="/quiz/temperature" element={<TemperatureQuiz />} />
        <Route path="/quiz/climate" element={<ClimateQuiz />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
