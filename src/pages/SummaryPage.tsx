import { ArrowLeft, Target, Users, Lightbulb, Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const navigate = useNavigate();

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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Gender and Youth Climate Action Initiative
          </h1>
          <p className="text-lg text-gray-600">
            A comprehensive framework for mainstreaming gender and youth participation in climate action across Africa,
            developed by the African Union Commission's Directorate of Women, Gender and Youth.
          </p>
        </div>

        {/* Key Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strategic Approach */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Strategic Approach</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Integration of gender and youth perspectives in climate policies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Enhanced participation in decision-making processes
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Capacity building and skills development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Resource mobilization and allocation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Monitoring and evaluation frameworks
              </li>
            </ul>
          </div>

          {/* Key Stakeholders */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold">Key Stakeholders</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                Women's organizations and networks
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                Youth-led climate initiatives
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                Government institutions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                Development partners
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                Civil society organizations
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Framework */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Lightbulb className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Implementation Framework</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-800">Policy Integration</h3>
              <p className="text-gray-600">
                Mainstreaming gender and youth considerations in climate policies,
                ensuring representation and participation in decision-making processes.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-800">Capacity Development</h3>
              <p className="text-gray-600">
                Building skills and knowledge through training programs, workshops,
                and technical assistance in climate-related sectors.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-800">Resource Mobilization</h3>
              <p className="text-gray-600">
                Securing and allocating resources for gender-responsive and
                youth-focused climate initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Book className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Expected Outcomes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Short-term Outcomes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Increased participation in climate initiatives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Enhanced capacity and skills
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Improved access to resources
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Stronger institutional frameworks
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Long-term Impact</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Sustainable climate solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Economic empowerment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Resilient communities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                  Transformative policy changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;