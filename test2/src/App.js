import Greeting from './components/Greeting';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
     <span>My first react app</span>
     <Greeting />
     <TaskList />
    </div>
  );
}

export default App;
