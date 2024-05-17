import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Workflows } from './components/WorkFlows';

export default function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workflows" element={<Workflows />} />
    </Routes>
  </div>
  );
}


