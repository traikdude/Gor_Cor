import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain, ChartBar, Book, Video, Calculator } from 'lucide-react';

export const ContentEngine = ({ tier, activeFunction, query, suggestions }) => {
  const [activeContent, setActiveContent] = useState('analysis');

  // Sample data for demonstrations
  const sampleData = [
    { name: 'Phase 1', progress: 20, understanding: 15 },
    { name: 'Phase 2', progress: 35, understanding: 30 },
    { name: 'Phase 3', progress: 55, understanding: 45 },
    { name: 'Phase 4', progress: 80, understanding: 75 },
    { name: 'Phase 5', progress: 95, understanding: 90 }
  ];

  const renderAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-blue-600" />
          Adaptive Analysis ({tier} mode)
        </h3>
        
        {tier === 'simple' && (
          <div>
            <p className="text-gray-700 mb-4">
              🧙🏾‍♂️ <strong>My Approach:</strong> I'll provide a clear, straightforward analysis focusing on the essential points you need.
            </p>
            <div className="space-y-2">
              <div><strong>Key Findings:</strong> [Essential insights based on your query]</div>
              <div><strong>Recommended Actions:</strong> [3-4 clear next steps]</div>
            </div>
          </div>
        )}

        {tier === 'standard' && (
          <div>
            <p className="text-gray-700 mb-4">
              🧙🏾‍♂️ <strong>Navigation Route:</strong> G1→R2→S1
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Goal Framework:</h4>
                <p className="text-gray-600">[Systematic breakdown with clear structure]</p>
              </div>
              <div>
                <h4 className="font-semibold">Analysis Synthesis:</h4>
                <p className="text-gray-600">[Research findings with methodology notes]</p>
              </div>
              <div>
                <h4 className="font-semibold">Solution Architecture:</h4>
                <p className="text-gray-600">[Implementation framework with alternatives]</p>
              </div>
            </div>
          </div>
        )}

        {(tier === 'advanced' || tier === 'expert') && (
          <div>
            <p className="text-gray-700 mb-4">
              🧙🏾‍♂️ <strong>Complete Analytical Pathway:</strong> G11→R112→E113→S111→O111
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium">Goal Decomposition (G11):</h5>
                <p className="text-sm text-gray-600">[Detailed objective mapping]</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">Research Validation (R112):</h5>
                <p className="text-sm text-gray-600">[Cross-referenced findings]</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">Expert Synergy (E113):</h5>
                <p className="text-sm text-gray-600">[Collaboration optimization]</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">Architecture Design (S111):</h5>
                <p className="text-sm text-gray-600">[Component-level planning]</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderVisualization = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <ChartBar className="w-5 h-5 mr-2 text-green-600" />
        Data Visualization
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="progress" stroke="#2563eb" name="Progress" />
            <Line type="monotone" dataKey="understanding" stroke="#16a34a" name="Understanding" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderInteractive = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Calculator className="w-5 h-5 mr-2 text-purple-600" />
        Interactive Tools
      </h3>
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium mb-2">Knowledge Assessment</h4>
          <div className="space-y-2">
            <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded">
              Question 1: [Interactive assessment question]
            </button>
            <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded">
              Question 2: [Follow-up question]
            </button>
          </div>
        </div>
        
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium mb-2">Decision Calculator</h4>
          <div className="grid grid-cols-2 gap-4">
            <input type="number" placeholder="Input A" className="p-2 border rounded" />
            <input type="number" placeholder="Input B" className="p-2 border rounded" />
          </div>
          <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Calculate Result
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Content Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex border-b">
          <button
            onClick={() => setActiveContent('analysis')}
            className={`px-6 py-3 font-medium ${
              activeContent === 'analysis' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Brain className="w-4 h-4 inline mr-2" />
            Analysis
          </button>
          <button
            onClick={() => setActiveContent('visual')}
            className={`px-6 py-3 font-medium ${
              activeContent === 'visual' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <ChartBar className="w-4 h-4 inline mr-2" />
            Visual
          </button>
          <button
            onClick={() => setActiveContent('interactive')}
            className={`px-6 py-3 font-medium ${
              activeContent === 'interactive' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Calculator className="w-4 h-4 inline mr-2" />
            Interactive
          </button>
        </div>

        <div className="p-6">
          {activeContent === 'analysis' && renderAnalysis()}
          {activeContent === 'visual' && renderVisualization()}
          {activeContent === 'interactive' && renderInteractive()}
        </div>
      </div>

      {/* Content Discovery */}
      {suggestions.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">📚 Content Discovery</h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Video className="w-4 h-4 mr-2 text-red-600" />
              <span>🎬 <em>Here's a helpful video I found:</em> [video URL]</span>
            </div>
            <div className="flex items-center text-sm">
              <Book className="w-4 h-4 mr-2 text-blue-600" />
              <span>🔗 <em>Here's a useful resource:</em> [link URL]</span>
            </div>
            <div className="text-sm">
              <span>📊 <em>I can create a visual chart for this data</em></span>
            </div>
            <div className="text-sm">
              <span>⚡ <em>Want an interactive dashboard instead?</em></span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-sm font-medium">💡 <em>Want deeper analysis? Try /expand or ask "go deeper"</em></p>
          </div>
        </div>
      )}
    </div>
  );
};
