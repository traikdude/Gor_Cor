import React from 'react';

export const Alert = ({ children, className = "", variant = "default" }) => {
  const baseClasses = "p-4 rounded-lg border";
  const variantClasses = {
    default: "bg-gray-50 border-gray-200",
    info: "bg-blue-50 border-blue-200",
    success: "bg-green-50 border-green-200",
    warning: "bg-yellow-50 border-yellow-200",
    error: "bg-red-50 border-red-200"
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export const AlertTitle = ({ children, className = "" }) => (
  <h4 className={`font-semibold mb-2 ${className}`}>{children}</h4>
);

export const AlertDescription = ({ children, className = "" }) => (
  <div className={`text-sm ${className}`}>{children}</div>
);
