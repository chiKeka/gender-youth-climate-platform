import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const MindMapPage = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = {
    policy: {
      title: "Policy & Governance",
      items: [
        {
          name: "African Union Climate Change Strategy",
          subItems: [
            "Gender-responsive policy frameworks",
            "Youth engagement in decision-making"
          ]
        },
        {
          name: "Regional coordination mechanisms",
          subItems: [
            "Inter-departmental collaboration",
            "Member state engagement"
          ]
        }
      ],
      color: "bg-blue-50 border-blue-200"
    },
    capacity: {
      title: "Capacity Building",
      items: [
        {
          name: "Skills Development",
          subItems: [
            "Climate-smart agriculture training",
            "Green entrepreneurship",
            "Digital innovation"
          ]
        },
        {
          name: "Knowledge Management",
          subItems: [
            "Traditional knowledge systems",
            "Best practices documentation",
            "Success stories sharing"
          ]
        }
      ],
      color: "bg-green-50 border-green-200"
    },
    finance: {
      title: "Climate Finance",
      items: [
        {
          name: "Resource Mobilization",
          subItems: [
            "Gender-responsive budgeting",
            "Youth-focused grants"
          ]
        },
        {
          name: "Partnership Development",
          subItems: [
            "Development partners",
            "Private sector engagement",
            "Civil society collaboration"
          ]
        }
      ],
      color: "bg-purple-50 border-purple-200"
    },
    implementation: {
      title: "Implementation Support",
      items: [
        {
          name: "Technical Assistance",
          subItems: [
            "Project design support",
            "Monitoring and evaluation"
          ]
        },
        {
          name: "Innovation Platforms",
          subItems: [
            "Youth-led solutions",
            "Women's initiatives"
          ]
        }
      ],
      color: "bg-orange-50 border-orange-200"
    },
    advocacy: {
      title: "Advocacy & Communication",
      items: [
        {
          name: "Awareness Raising",
          subItems: [
            "Climate justice campaigns",
            "Gender equality promotion"
          ]
        },
        {
          name: "Stakeholder Engagement",
          subItems: [
            "Youth networks",
            "Women's organizations"
          ]
        }
      ],
      color: "bg-red-50 border-red-200"
    },
    research: {
      title: "Research & Data",
      items: [
        {
          name: "Gender Analysis",
          subItems: [
            "Climate vulnerability assessments",
            "Impact studies"
          ]
        },
        {
          name: "Youth Demographics",
          subItems: [
            "Employment opportunities",
            "Innovation potential"
          ]
        }
      ],
      color: "bg-indigo-50 border-indigo-200"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Navigation */}
      <button 
        onClick={() => window.location.href = '/'}
        className="flex items-center text-blue-600 mb-8 hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </button>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Strategic Mind Map
        </h1>
        <p className="text-lg text-gray-600">
          Visual representation of our comprehensive approach to gender and youth climate action
        </p>
      </div>

      {/* Mind Map Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(sections).map(([key, section]) => (
          <div 
            key={key}
            className={`p-6 rounded-lg border-2 shadow-md transition-all duration-300 cursor-pointer ${section.color} 
              ${activeSection === key ? 'scale-105 shadow-lg' : 'hover:scale-102'}`}
            onClick={() => setActiveSection(activeSection === key ? '' : key)}
          >
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className={`space-y-4 transition-all duration-300 ${activeSection === key ? 'opacity-100' : 'opacity-70'}`}>
              {section.items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <ul className="pl-4 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></div>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">How to Use This Mind Map</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Click on any section to expand and focus on its details
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Each color represents a different strategic area
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Sub-items show specific initiatives and focus areas
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MindMapPage;