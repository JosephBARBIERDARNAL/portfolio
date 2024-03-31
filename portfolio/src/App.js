// frontend/src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Blog from './pages/blog/blog';

// projects
import SeulsSousLesPins from './components/projects/seuls-sous-les-pins';
import AITalks from './components/projects/ai-talks';
import Cieri from './components/projects/cieri';
import StatisticalJourney from './components/projects/statistical-journey';

// articles
import ReverseEngData from './components/articles/dont-reverse-engineer-data';

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
        <Route path="/dont-reverse-engineer-the-data" element={<ReverseEngData />} />
      </Routes>
  );
}

export default App;
