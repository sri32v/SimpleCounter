import './App.css';
import Counter from './Components/Counter'
import {React,useState} from 'react'

function App() {
const [Count,setCount] = useState(0);
  return (
    <div className="App">
      React Starter Page
      <Counter 
      Count={Count}
      setCount={setCount}
      />
    </div>
  );
}

export default App;
