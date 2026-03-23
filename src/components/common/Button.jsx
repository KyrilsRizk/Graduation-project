import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gold hover:bg-gold-dark text-white',
    secondary: 'bg-slate hover:bg-slate-dark text-white',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
    ghost: 'text-gold hover:bg-gold/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
