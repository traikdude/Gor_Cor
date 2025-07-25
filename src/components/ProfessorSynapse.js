import React, { useState, useEffect } from 'react';
import { TierNavigator } from './TierNavigator';
import { ContentEngine } from './ContentEngine';
import { AdaptiveResponse } from './AdaptiveResponse';
import { Alert, AlertTitle, AlertDescription } from './ui/Alert';
import { Brain, Zap, Search, Target } from 'lucide-react';

const ProfessorSynapse = () => {
  const [currentTier, setCurrentTier] = useState('simple');
  const [activeFunction, setActiveFunction] = useState(null);
  const [userQuery, setUserQuery] = useState('');
  const [analysisPath, setAnalysisPath] = useState([]);
  const [contentSuggestions, setContentSuggestions] = useState([]);

  // Core framework functions mapped to tiers
  const tierFunctions = {
    simple: {
      G: { name: 'Goal & Strategy', functions: ['G1: Goal analysis', 'G2: Strategic planning'] },
      R: { name: 'Research & Analysis', functions: ['R1: Information gathering', 'R2: Deep analysis'] },
      E: { name: 'Expert Collaboration', functions: ['E1: Expert summoning', 'E2: Team coordination'] },
      S: { name: 'Solution Development', functions: ['S1: Solution design', 'S2: Implementation'] },
      O: { name: 'Output & Presentation', functions: ['O1: Smart format suggestion', 'O2: Multi-modal delivery'] }
    },
    standard: {
      // Expanded functions with 2-3 subfunctions each
      G1: ['G11: Primary objective mapping', 'G12: Subgoal hierarchy creation', 'G13: Success criteria definition'],
      R1: ['R11: Multi-source research', 'R12: Data synthesis and validation', 'R13: Pattern recognition'],
      E1: ['E11: Expertise matching', 'E12: Context briefing', 'E13: Collaboration setup'],
      S1: ['S11: Framework architecture', 'S12: Alternative generation', 'S13: Optimization planning'],
      O1: ['O11: Context-based format recommendation', 'O12: Multi-modal content planning', 'O13: Output optimization strategy']
    },
    advanced: {
      // 4-level deep functions
      G11: ['G111: Core mission extraction', 'G112: Success metric definition', 'G113: Timeline and priority analysis', 'G114: Stakeholder impact assessment'],
      R11: ['R111: Primary source identification', 'R112: Cross-reference validation', 'R113: Credibility assessment', 'R114: Bias detection and correction']
    },
    expert: {
      // Complete 64 specialized micro-functions (expandable)
      fullNavigation: true
    }
  };

  const handleQueryAnalysis = (query) => {
    setUserQuery(query);

    // Smart content detection
    const suggestions = analyzeQueryForFormats(query);
    setContentSuggestions(suggestions);

    // Auto-tier selection based on complexity
    const detectedComplexity = detectComplexity(query);
    if (detectedComplexity !== currentTier) {
      setCurrentTier(detectedComplexity);
    }
  };

  const analyzeQueryForFormats = (query) => {
    const suggestions = [];

    // Pattern matching for auto-format suggestions
    if (query.toLowerCase().includes('compare') || query.includes('vs')) {
      suggestions.push({ type: 'chart', format: 'D2: Comparison charts', icon: '📊' });
      suggestions.push({ type: 'table', format: 'T2: Feature matrices', icon: '📋' });
    }

    if (query.toLowerCase().includes('how to') || query.includes('steps')) {
      suggestions.push({ type: 'video', format: 'M1: Process videos', icon: '🎬' });
      suggestions.push({ type: 'checklist', format: 'T3: Step-by-step tables', icon: '✅' });
    }

    if (query.toLowerCase().includes('data') || query.includes('analyze')) {
      suggestions.push({ type: 'dashboard', format: 'I1: Interactive dashboards', icon: '⚡' });
      suggestions.push({ type: 'visualization', format: 'D3: Advanced plots', icon: '📈' });
    }

    return suggestions;
  };

  const detectComplexity = (query) => {
    const complexityIndicators = {
      simple: ['help', 'what is', 'how do i', 'explain'],
      standard: ['analyze', 'compare', 'evaluate', 'design'],
      advanced: ['optimize', 'synthesize', 'systematically', 'comprehensive'],
      expert: ['exhaustive', 'research-grade', 'multi-dimensional', 'framework']
    };

    const queryLower = query.toLowerCase();

    for (const [tier, indicators] of Object.entries(complexityIndicators)) {
      if (indicators.some(indicator => queryLower.includes(indicator))) {
        return tier;
      }
    }

    return 'simple'; // default
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🧙🏾‍♂️ Professor Synapse Enhanced
          </h1>
          <p className="text-lg text-gray-600">
            Adaptive Hybrid Framework for Collaborative Intelligence
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              currentTier === 'simple' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
            }`}>
              Simple
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              currentTier === 'standard' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
            }`}>
              Standard
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              currentTier === 'advanced' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
            }`}>
              Advanced
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              currentTier === 'expert' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-600'
            }`}>
              Expert
            </span>
          </div>
        </div>

        {/* Query Input */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              placeholder="What would you like to explore? I'll adapt my response to your needs..."
              value={userQuery}
              onChange={(e) => handleQueryAnalysis(e.target.value)}
            />
          </div>
        </div>

        {/* Content Suggestions */}
        {contentSuggestions.length > 0 && (
          <div className="mb-8">
            <Alert className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
              <Brain className="h-4 w-4" />
              <AlertTitle>Smart Format Suggestions</AlertTitle>
              <AlertDescription>
                <div className="mt-2 flex flex-wrap gap-2">
                  {contentSuggestions.map((suggestion, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white border border-blue-200">
                      <span className="mr-1">{suggestion.icon}</span>
                      {suggestion.format}
                    </span>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Tier Navigator */}
          <div className="lg:col-span-1">
            <TierNavigator
              currentTier={currentTier}
              onTierChange={setCurrentTier}
              functions={tierFunctions[currentTier]}
              onFunctionSelect={setActiveFunction}
            />
          </div>

          {/* Content Engine */}
          <div className="lg:col-span-2">
            <ContentEngine
              tier={currentTier}
              activeFunction={activeFunction}
              query={userQuery}
              suggestions={contentSuggestions}
            />
          </div>
        </div>

        {/* Command Palette */}
        <div className="fixed bottom-4 right-4">
          <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">Quick Commands</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>/simple - Switch to Tier 1</div>
              <div>/expand - Go deeper</div>
              <div>/visual - Generate visual</div>
              <div>/auto - Adaptive mode</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorSynapse;
