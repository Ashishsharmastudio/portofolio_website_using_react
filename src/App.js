import logo from './logo.svg';
import './App.css';
function App() {
  let data="ashish sharma"
  function apple()
  {
    data="raja"
    alert(data);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>apple()}>click me</button>
    </div>
  );
}

export default App;
