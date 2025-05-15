import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      <h1 className="text-6xl font-bold">nell</h1>
      <p className="text-xl text-gray-600 mt-2">Enhanced NLP for customizable long-form writing</p>
      <button
        onClick={() => navigate('/setup')}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        Start
      </button>
    </div>
  );
}

