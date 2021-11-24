import React from 'react';

import Greeting from './components/Greeting';
import TaskList from './components/TaskList';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
     <span>My first react app</span>
     <Greeting />
     <TaskList />
     <Counter />
    </div>
  );
}

export default App;
