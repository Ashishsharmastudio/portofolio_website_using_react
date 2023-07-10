import logo from './logo.svg';
import './App.css';
import Student from './student'
function APP() {
  return(
    <div className="App">
    <h1> props in react</h1>
    <Student name={"ashu"} email="ashu@test.com" other={{address:'jhansi',mobile:"54151"}} />
    <Student name={"raja"} email="RAJA@test.com" other={{address:'garutha',mobile:"54451"}} />
    <Student name={"lali"} email="lali@test.com" other={{address:'shila',mobile:"545555151"}} />
    </div>
  );
}

export default APP;