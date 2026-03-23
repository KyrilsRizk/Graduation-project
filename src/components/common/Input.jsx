import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  className = '',
  label,
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-textGray mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
