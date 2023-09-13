import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  let navigate = useNavigate();
  let location = useLocation();

  // Это исключительно для GH-Pages
  useEffect(() => {
    if (
      location.pathname === '/proelectro/' ||
      location.pathname === '/proelectro'
    ) {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  return (
    <div>
      <h3>Упс, такой страницы нет</h3>
    </div>
  );
}
