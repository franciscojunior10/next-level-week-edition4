import React, { FC } from 'react';
import ExperienceBar from './components/ExperienceBar';

import './styles/global.css';

const App: FC = () => {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
};

export default App;
