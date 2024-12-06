import { HanoiGame } from './HanoiGame';

export function ExploreSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 py-20 px-4">
      <div className="container mx-auto">
        <HanoiGame />
      </div>
    </section>
  );
}
