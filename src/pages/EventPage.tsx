import { useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-4 text-blue-600 hover:text-blue-800"
      >
        Back to Home
      </button>
      <h1 className="text-3xl font-bold">Event Page</h1>
    </div>
  );
};

export default SummaryPage;