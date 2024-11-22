import { ArrowLeft, InfoIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScorecardPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scoringData = {
    policyFramework: {
      title: "Policy & Institutional Framework",
      icon: "🏛️",
      items: [
        { name: "Gender-responsive climate policies", score: 4, total: 5, notes: "National climate strategy updated with gender considerations", trend: "up" },
        { name: "Youth integration in climate governance", score: 3, total: 5, notes: "Youth representatives in 60% of climate committees", trend: "up" },
        { name: "Gender-responsive budgeting", score: 4, total: 5, notes: "20% of climate funds allocated to gender-specific actions", trend: "up" },
        { name: "Implementation frameworks", score: 3, total: 5, notes: "Monitoring mechanisms established in key sectors", trend: "neutral" }
      ]
    },
    climateAction: {
      title: "Climate Action Implementation",
      icon: "🌱",
      items: [
        { name: "Women-led adaptation projects", score: 4, total: 5, notes: "15 community resilience projects initiated", trend: "up" },
        { name: "Youth climate innovations", score: 5, total: 5, notes: "Green tech incubator launched with 20 startups", trend: "up" },
        { name: "Gender-sensitive early warning", score: 3, total: 5, notes: "Systems established in 60% target areas", trend: "neutral" },
        { name: "Climate-smart agriculture", score: 4, total: 5, notes: "2000 women farmers trained in resilient practices", trend: "up" }
      ]
    },
    capacityDevelopment: {
      title: "Capacity & Skills Development",
      icon: "📚",
      items: [
        { name: "Gender climate leadership", score: 4, total: 5, notes: "Leadership program launched in 5 regions", trend: "up" },
        { name: "Youth green skills", score: 3, total: 5, notes: "300 youth trained in renewable energy", trend: "up" },
        { name: "Knowledge exchange", score: 3, total: 5, notes: "Regional platform connecting 1000 stakeholders", trend: "neutral" },
        { name: "Technical capacity", score: 4, total: 5, notes: "Expert pool established across sectors", trend: "up" }
      ]
    },
    resourceMobilization: {
      title: "Resource Mobilization & Partnerships",
      icon: "💰",
      items: [
        { name: "Climate finance access", score: 4, total: 5, notes: "USD 2M secured for gender-climate projects", trend: "up" },
        { name: "Youth entrepreneurship", score: 3, total: 5, notes: "Seed funding provided to 25 youth ventures", trend: "up" },
        { name: "Strategic partnerships", score: 5, total: 5, notes: "10 new partnerships established", trend: "up" },
        { name: "Resource leveraging", score: 4, total: 5, notes: "200% increase in co-financing", trend: "up" }
      ]
    },
    monitoringEvaluation: {
      title: "Monitoring, Evaluation & Learning",
      icon: "📊",
      items: [
        { name: "Gender-disaggregated data", score: 3, total: 5, notes: "Data collection systems strengthened", trend: "up" },
        { name: "Impact assessment", score: 4, total: 5, notes: "Quarterly assessments conducted", trend: "up" },
        { name: "Learning documentation", score: 3, total: 5, notes: "Best practices documented from 8 projects", trend: "neutral" },
        { name: "Stakeholder feedback", score: 4, total: 5, notes: "Regular consultations established", trend: "up" }
      ]
    }
  };

  const calculatePercentage = (score: number, total: number) => (score / total) * 100;

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <span className="w-4 h-4 text-gray-500">→</span>;
    }
  };

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'policyFramework', name: 'Policy Framework' },
    { id: 'climateAction', name: 'Climate Action' },
    { id: 'capacityDevelopment', name: 'Capacity Development' },
    { id: 'resourceMobilization', name: 'Resource Mobilization' },
    { id: 'monitoringEvaluation', name: 'Monitoring & Evaluation' }
  ];

  const calculateOverallScore = () => {
    let totalScore = 0;
    let totalPossible = 0;
    Object.values(scoringData).forEach(category => {
      category.items.forEach(item => {
        totalScore += item.score;
        totalPossible += item.total;
      });
    });
    return (totalScore / totalPossible * 100).toFixed(1);
  };

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

      {/* Header with Overall Score */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Gender & Youth Climate Action Scorecard
          </h1>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-2">
                Reporting Period: Q2 2024 | Region: East Africa
              </p>
              <p className="text-gray-600">
                Last Updated: April 15, 2024
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {calculateOverallScore()}%
              </div>
              <div className="text-sm text-gray-600">Overall Score</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Scorecard Sections */}
      <div className="max-w-4xl mx-auto space-y-6">
        {Object.entries(scoringData).map(([key, section]) => (
          (selectedCategory === 'all' || selectedCategory === key) && (
            <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </h2>
                  
                  {/* Section Score */}
                  {(() => {
                    const sectionScore = section.items.reduce((acc, item) => acc + item.score, 0);
                    const sectionTotal = section.items.reduce((acc, item) => acc + item.total, 0);
                    const percentage = (sectionScore / sectionTotal * 100).toFixed(1);
                    return (
                      <div className="text-lg font-semibold text-gray-700">
                        {sectionScore}/{sectionTotal} ({percentage}%)
                      </div>
                    );
                  })()}
                </div>

                <div className="space-y-4">
                  {section.items.map((item, index) => {
                    const percentage = calculatePercentage(item.score, item.total);
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <span>{item.name}</span>
                            <div className="relative group">
                              <InfoIcon className="w-4 h-4 text-gray-400 cursor-help" />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {item.notes}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getTrendIcon(item.trend)}
                            <span>{item.score}/{item.total}</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${getScoreColor(percentage)} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Key Findings Card */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Key Findings & Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-green-600 mb-2">Strengths</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Strong performance in youth climate innovations with full marks achieved</li>
                <li>Effective partnership development showing excellent results</li>
                <li>Significant progress in gender-responsive climate policy development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-600 mb-2">Areas for Improvement</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Knowledge exchange systems need strengthening</li>
                <li>Gender-disaggregated data collection requires enhancement</li>
                <li>Youth entrepreneurship support could be expanded</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorecardPage;