import { ArrowLeft, Users, Target, Wallet, GraduationCap } from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [selectedTimeframe, setSelectedTimeframe] = useState('6M');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  // Performance metrics data
  const performanceData = [
    { subject: 'Policy Implementation', women: 80, youth: 60, full: 100 },
    { subject: 'Resource Access', women: 70, youth: 75, full: 100 },
    { subject: 'Capacity Building', women: 85, youth: 90, full: 100 },
    { subject: 'Project Leadership', women: 75, youth: 80, full: 100 },
    { subject: 'Innovation', women: 65, youth: 95, full: 100 },
    { subject: 'Stakeholder Engagement', women: 90, youth: 85, full: 100 }
  ];

  // Capacity building data
  const capacityBuildingData = [
    { skill: 'Climate Science', completed: 450, ongoing: 200, planned: 150 },
    { skill: 'Project Management', completed: 380, ongoing: 250, planned: 120 },
    { skill: 'Digital Skills', completed: 520, ongoing: 300, planned: 180 },
    { skill: 'Policy Analysis', completed: 280, ongoing: 150, planned: 90 },
    { skill: 'Finance', completed: 320, ongoing: 180, planned: 100 }
  ];

  // Monthly participation data
  const participationData = [
    { month: 'Jan', women: 250, youth: 320 },
    { month: 'Feb', women: 380, youth: 400 },
    { month: 'Mar', women: 420, youth: 450 },
    { month: 'Apr', women: 520, youth: 480 },
    { month: 'May', women: 580, youth: 600 },
    { month: 'Jun', women: 620, youth: 650 }
  ];

  // Project distribution data
  const projectDistribution = [
    { name: 'Agriculture', value: 35 },
    { name: 'Energy', value: 25 },
    { name: 'Water', value: 20 },
    { name: 'Waste', value: 15 },
    { name: 'Other', value: 5 }
  ];

  // Key metrics
  const metrics = [
    {
      title: "Total Participants",
      value: "42,850",
      change: "+12%",
      subtext: "Women: 22,450 | Youth: 20,400",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Projects Active",
      value: "140",
      change: "+15%",
      subtext: "Women-led: 75 | Youth-led: 65",
      icon: <Target className="w-6 h-6 text-green-600" />
    },
    {
      title: "Capacity Building",
      value: "12,500",
      change: "+18%",
      subtext: "Completion Rate: 85%",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Total Funding",
      value: "$8.2M",
      change: "+20%",
      subtext: "Disbursement Rate: 78%",
      icon: <Wallet className="w-6 h-6 text-orange-600" />
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Filter controls
  const timeframes = ['1M', '3M', '6M', '1Y', 'All'];
  const regions = ['All Regions', 'East Africa', 'West Africa', 'North Africa', 'Southern Africa', 'Central Africa'];

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

      {/* Header with Filters */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Comprehensive metrics and performance indicators
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Timeframe Filter */}
            <div className="flex space-x-2">
              {timeframes.map((time) => (
                <button
                  key={time}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    selectedTimeframe === time
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTimeframe(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-1 rounded-md text-sm font-medium bg-white text-gray-600 border border-gray-200"
            >
              {regions.map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              {metric.icon}
              <span className={`text-sm ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">{metric.title}</h3>
            <p className="text-2xl font-bold mb-1">{metric.value}</p>
            <p className="text-xs text-gray-500">{metric.subtext}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Radar Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Women" dataKey="women" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Youth" dataKey="youth" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Capacity Building Progress */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Capacity Building Progress</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={capacityBuildingData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="skill" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" stackId="a" fill="#8884d8" name="Completed" />
                <Bar dataKey="ongoing" stackId="a" fill="#82ca9d" name="Ongoing" />
                <Bar dataKey="planned" stackId="a" fill="#ffc658" name="Planned" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Participation Trends */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Participation Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={participationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="women" stroke="#8884d8" name="Women" strokeWidth={2} />
                <Line type="monotone" dataKey="youth" stroke="#82ca9d" name="Youth" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Project Distribution by Sector</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {projectDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;