import logo from './logo.svg';
import './App.css';
function App() {
  function apple() { 
    alert('function called');
   }
  return (
    <div className="App">
      <h1>Hello WORLD!</h1>
      <button onClick={alert()}>click me</button>
      
    </div>
  );
}

export default App;
