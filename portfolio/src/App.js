// frontend/src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Blog from './pages/blog/blog';
import SeulsSousLesPins from './pages/projects/seuls-sous-les-pins';
import AITalks from './pages/projects/ai-talks';
import Cieri from './pages/projects/cieri';
import StatisticalJourney from './pages/projects/statistical-journey';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/seuls-sous-les-pins" element={<SeulsSousLesPins />} />
        <Route path="/ai-talks" element={<AITalks />} />
        <Route path="/cieri" element={<Cieri />} />
        <Route path="/statistical-journey" element={<StatisticalJourney />} />
      </Routes>
  );
}

export default App;
