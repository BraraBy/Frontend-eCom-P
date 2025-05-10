import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home , Login } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default App;
