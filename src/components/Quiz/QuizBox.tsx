interface QuizBoxProps {
  title: string;
  description: string;
  link: string;
}

export function QuizBox({ title, description, link }: QuizBoxProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Start Quiz
      </a>
    </div>
  );
}
