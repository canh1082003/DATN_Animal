import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = '#3498db',
}) => {
  return (
    <div
      className="spinner"
      style={{
        width: size,
        height: size,
        borderTopColor: color,
      }}
    />
  );
};

export default LoadingSpinner;
