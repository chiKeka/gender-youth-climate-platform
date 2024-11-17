
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useState } from 'react';

const EventsPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: "Youth Climate Innovation Summit",
      date: "2025-02-15",
      time: "09:00 - 17:00",
      location: "Nairobi, Kenya",
      type: "conference",
      category: "youth",
      participants: 300,
      description: "Annual summit showcasing youth-led climate innovations and sustainable solutions across Africa.",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Women in Green Energy Workshop Series",
      date: "2025-03-20",
      time: "10:00 - 16:00",
      location: "Addis Ababa, Ethiopia",
      type: "workshop",
      category: "women",
      participants: 150,
      description: "Capacity building workshop focused on renewable energy entrepreneurship and leadership for women.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Climate-Smart Agriculture Training Camp",
      date: "2025-04-10",
      time: "08:30 - 15:30",
      location: "Kampala, Uganda",
      type: "training",
      category: "both",
      participants: 200,
      description: "Five-day intensive training on sustainable farming practices and climate resilience strategies.",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Gender and Climate Finance Forum",
      date: "2025-05-25",
      time: "09:30 - 16:30",
      location: "Kigali, Rwanda",
      type: "conference",
      category: "women",
      participants: 250,
      description: "Strategic forum on accessing climate finance and implementing gender-responsive climate projects.",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Youth Green Tech Hackathon",
      date: "2025-06-15",
      time: "09:00 - 18:00",
      location: "Dar es Salaam, Tanzania",
      type: "workshop",
      category: "youth",
      participants: 180,
      description: "48-hour hackathon for young innovators developing tech solutions for climate challenges.",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Regional Climate Action Leadership Program",
      date: "2025-07-05",
      time: "10:00 - 16:00",
      location: "Lusaka, Zambia",
      type: "training",
      category: "both",
      participants: 120,
      description: "Three-month leadership program for emerging climate leaders from across Eastern Africa.",
      status: "upcoming"
    },
    {
      id: 7,
      title: "Women's Climate Entrepreneurship Summit",
      date: "2025-08-20",
      time: "09:00 - 17:00",
      location: "Johannesburg, South Africa",
      type: "conference",
      category: "women",
      participants: 400,
      description: "Summit connecting women entrepreneurs with investors and partners in climate action sectors.",
      status: "upcoming"
    },
    {
      id: 8,
      title: "Youth Climate Policy Workshop",
      date: "2025-09-10",
      time: "10:00 - 15:00",
      location: "Nairobi, Kenya",
      type: "workshop",
      category: "youth",
      participants: 150,
      description: "Interactive workshop on climate policy advocacy and youth participation in decision-making.",
      status: "upcoming"
    },
    {
      id: 9,
      title: "Gender-Responsive Climate Action Training",
      date: "2025-10-15",
      time: "09:30 - 16:30",
      location: "Addis Ababa, Ethiopia",
      type: "training",
      category: "both",
      participants: 200,
      description: "Comprehensive training on mainstreaming gender considerations in climate projects.",
      status: "upcoming"
    }
  ];

  const typeOptions = ['all', 'workshop', 'conference', 'training'];
  const categoryOptions = ['all', 'women', 'youth', 'both'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Navigation */}
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 mb-8 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </button>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              2025 Events Calendar
            </h1>
            <p className="text-gray-600">
              Upcoming activities and programs for gender and youth climate action
            </p>
          </div>
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex gap-4">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {typeOptions.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categoryOptions.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <div 
            key={event.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{event.title}</h2>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.participants} participants</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4 mb-4">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(event.status)}`}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-gray-600">No events found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
