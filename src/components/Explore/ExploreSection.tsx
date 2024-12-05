import { BiologyCard } from './BiologyCard';

const biologyCards = [
  {
    emoji: '🌬️',
    title: 'Les Poumons de la Terre',
    description: "Le phytoplancton produit 50% de l'oxygène mondial",
  },
  {
    emoji: '💓',
    title: 'Le Cœur des Océans',
    description: 'Les courants marins régulent notre climat',
  },
  {
    emoji: '🧠',
    title: 'Le Cerveau Marin',
    description: "L'océan régule la température mondiale",
  },
  {
    emoji: '🩸',
    title: 'La Circulation Vitale',
    description: 'Transport des nutriments essentiels',
  },
];

export function ExploreSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Explorer les Parallèles 🔍
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {biologyCards.map((card) => (
            <BiologyCard
              key={card.emoji}
              {...card}
              onClick={() => console.log(`Clicked ${card.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}