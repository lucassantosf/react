import React from 'react';
import Router from './routes'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
