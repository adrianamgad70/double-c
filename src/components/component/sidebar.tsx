import React, { useState, useEffect } from 'react';
// import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`sidebar ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <button className="sidebar-button">Button 1</button>
      <button className="sidebar-button">Button 2</button>
      <button className="sidebar-button">Button 3</button>
    </div>
  );
};

export default Sidebar;
