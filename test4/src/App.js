import React, { useState } from 'react';

import Greeting from './components/Greeting';
import TaskList from './components/TaskList';
import Counter from './components/Counter';
import TreeImage from './components/TreeImage';
import './App.css';

function App() {
  const [showThings, setShowThings] = useState(false);

  const showOrHide = () => {
    setShowThings(!showThings);
  };
  return (
    <div className="App">
     <span>My first react app</span>
     <Greeting />
     <TaskList />
     {showThings && <Counter />}
     <TreeImage showImage={showThings} showOrHideImage={showOrHide} />
    </div>
  );
}

export default App;
