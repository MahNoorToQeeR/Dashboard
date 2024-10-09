import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Oops! Page Not Found</h2>
      <p className="not-found-description">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button className="not-found-button" onClick={handleGoHome}>
        Go to Home
      </button>
      <p className="not-found-footer">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  );
};

export default NotFound;
