import logo from './logo.svg';
import './App.css';
function App() {
  function apple()
  {
    alert("funcion called");
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
        <button onClick={() =>apple()}>click me</button>
    </div>
  );  
}

export default App;
