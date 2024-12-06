
import { motion } from 'framer-motion';
import { Header } from '../Layout/Header';

const Quiz = () => {
  const quizzes = [
    {
      title: '💓 Ocean Circulation',
      description: 'How do currents act like the heart of the ocean?',
      link: '/quiz/circulation',
    },
    {
      title: '🌬️ Ocean Breathing',
      description: 'Discover how oceans exchange gases, just like lungs!',
      link: '/quiz/breathing',
    },
    {
      title: '🧪 Ocean Chemistry',
      description: 'Explore the ocean’s role in balancing Earth’s pH.',
      link: '/quiz/chemistry',
    },
  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const waveEmojis = ['🌊', '🐋', '🐠', '🐡', '🦈', '🐬', '🐟', '🐳'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Fixed Header */}
      <Header />

      {/* Waves Section */}
      <div className="relative bg-blue-500 overflow-hidden z-0">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 flex space-x-8 text-3xl"
          style={{ whiteSpace: 'nowrap' }}
        >
          {[...waveEmojis, ...waveEmojis, ...waveEmojis].map((emoji, index) => (
            <span key={index}>{emoji}</span>
          ))}
        </motion.div>
        <div className="h-12"></div> {/* Ensures wave section height */}
      </div>

      {/* Quiz Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🌊 Dive Into the Ocean’s Secrets!
          </h1>
          <p className="text-xl text-gray-600">
            Explore how the ocean mirrors the human body. Start your journey now!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {quizzes.map((quiz, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <div className="bg-white rounded-xl shadow-md h-full p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{quiz.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{quiz.description}</p>
                <motion.a
                  whileHover={{ backgroundColor: '#2563eb' }}
                  href={quiz.link}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg
                           flex items-center justify-center space-x-2"
                >
                  <span>Start Quiz</span>
                  <span className="ml-2">➡️</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
