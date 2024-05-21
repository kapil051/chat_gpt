import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Workflows } from './components/WorkFlows';
import { ComponyNor } from './components/ComponyNor';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';

export default function App() {

  return (
    <div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/workflows" element={<Workflows />} />
      <Route path="/workflows/try" element={<ComponyNor/>} />
    </Routes>
  </div>
  );
}


