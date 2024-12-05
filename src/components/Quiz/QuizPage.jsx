// src/components/Home/QuizPage.tsx


export function QuizPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white px-4 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">New Themed Component</h2>
        <p className="text-center text-lg mb-4">
          This is a new component that follows the existing theme.
        </p>
        <button
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Themed Button
        </button>
      </div>
    </section>
  );
}