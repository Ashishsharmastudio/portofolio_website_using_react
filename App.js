import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [data,setData]=useState(0)
  function updateData() 
  {
    setData(data+1)
  }
  console.warn("___________")
  return (
    <div className="App">
      <h1>{data}</h1>
      {/* <button> update Data</button> */}
      <button onClick={updateData}>update Data</button>
    </div>
  );
}

export default App;
