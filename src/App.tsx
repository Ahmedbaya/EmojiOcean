import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { ExploreSection } from './components/Explore/ExploreSection';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main>
        <Hero />
        <ExploreSection />
      </main>
    </div>
  );
}

export default App;