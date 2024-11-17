import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'conference' | 'training' | 'meeting';
  category: 'women' | 'youth' | 'both';
  participants: number;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
};

const EventsPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const events: EventType[] = [
    {
      id: 1,
      title: "Climate Innovation Workshop",
      date: "2024-12-01",
      time: "09:00 - 16:00",
      location: "Nairobi, Kenya",
      type: "workshop",
      category: "youth",
      participants: 50,
      description: "Hands-on workshop focusing on innovative climate solutions led by youth entrepreneurs.",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Women in Renewable Energy Conference",
      date: "2024-12-15",
      time: "10:00 - 17:00",
      location: "Addis Ababa, Ethiopia",
      type: "conference",
      category: "women",
      participants: 200,
      description: "Annual conference highlighting women's leadership in renewable energy sectors.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Climate-Smart Agriculture Training",
      date: "2024-12-20",
      time: "08:30 - 15:30",
      location: "Kampala, Uganda",
      type: "training",
      category: "both",
      participants: 75,
      description: "Practical training on sustainable farming practices and climate resilience.",
      status: "upcoming"
    }
  ];

  const typeOptions = ['all', 'workshop', 'conference', 'training', 'meeting'];
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'women':
        return '👩';
      case 'youth':
        return '👥';
      case 'both':
        return '👥👩';
      default:
        return '👥';
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
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
              Upcoming Events
            </h1>
            <p className="text-gray-600">
              Calendar of key activities and programs
            </p>
          </div>
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
            {/* Event Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                <span className="text-2xl">{getCategoryIcon(event.category)}</span>
              </div>
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
            </div>

            {/* Event Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-4">{event.description}</p>
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