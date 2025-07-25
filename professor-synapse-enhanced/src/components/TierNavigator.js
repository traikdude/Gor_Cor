import React from 'react';
import { Target, Search, Users, Lightbulb, Presentation } from 'lucide-react';

export const TierNavigator = ({ currentTier, onTierChange, functions, onFunctionSelect }) => {
  const tierIcons = {
    G: Target,
    R: Search, 
    E: Users,
    S: Lightbulb,
    O: Presentation
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Navigation System</h3>
      
      {/* Tier Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Complexity Level
        </label>
        <select 
          value={currentTier}
          onChange={(e) => onTierChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="simple">Simple - Essential Commands</option>
          <option value="standard">Standard - Expanded Functions</option>
          <option value="advanced">Advanced - Deep Analysis</option>
          <option value="expert">Expert - Complete System</option>
        </select>
      </div>

      {/* Function Grid */}
      {currentTier === 'simple' && (
        <div className="space-y-3">
          {Object.entries(functions).map(([key, func]) => {
            const IconComponent = tierIcons[key];
            return (
              <div key={key} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center mb-2">
                  <IconComponent className="w-5 h-5 mr-2 text-blue-600" />
                  <h4 className="font-medium">{func.name}</h4>
                </div>
                <div className="space-y-1">
                  {func.functions.map((f, index) => (
                    <div key={index} className="text-sm text-gray-600 pl-7">
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Command Reference */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-medium text-gray-800 mb-2">Commands</h4>
        <div className="space-y-1 text-xs text-gray-600">
          <div>/expand [function] - Go deeper</div>
          <div>/drill - Maximum depth</div>
          <div>/visual - Create visualization</div>
          <div>/interactive - Interactive element</div>
        </div>
      </div>
    </div>
  );
};
