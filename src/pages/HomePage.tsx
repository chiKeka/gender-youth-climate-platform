import { useNavigate } from 'react-router-dom';
import { Calendar, BarChart2, Map, ClipboardCheck, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path); // Debug log
    navigate(path);
  };

  const tiles = [
    {
      title: "Gender and Youth Climate Action Summary",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Comprehensive overview of our climate action initiatives",
      path: "/summary",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "Strategic Mind Map",
      icon: <Map className="w-8 h-8 text-green-600" />,
      description: "Visual representation of our programmatic approach",
      path: "/mindmap",
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "Performance Scorecard",
      icon: <ClipboardCheck className="w-8 h-8 text-purple-600" />,
      description: "Detailed metrics and evaluation framework",
      path: "/scorecard",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "Analytics Dashboard",
      icon: <BarChart2 className="w-8 h-8 text-orange-600" />,
      description: "Real-time data visualization and insights",
      path: "/dashboard",
      color: "bg-orange-50 hover:bg-orange-100"
    },
    {
      title: "Upcoming Events",
      icon: <Calendar className="w-8 h-8 text-red-600" />,
      description: "Calendar of key activities and programs",
      path: "/events",
      color: "bg-red-50 hover:bg-red-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Gender and Youth Climate Action Platform
        </h1>
        <p className="text-lg text-gray-600">
          African Union Commission's Directorate of Women, Gender and Youth
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tiles.map((tile, index) => (
          <div 
            key={index}
            onClick={() => handleNavigation(tile.path)}
            className={`p-6 rounded-lg shadow-md ${tile.color} transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleNavigation(tile.path);
              }
            }}
          >
            <div className="flex items-center justify-between mb-4">
              {tile.icon}
              <h2 className="text-xl font-semibold">{tile.title}</h2>
            </div>
            <p className="text-gray-600">{tile.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center text-gray-600">
        <p>© 2024 African Union Commission. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;