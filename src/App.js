import {Nav} from './components/Navbar'
import logo from './logo.svg';
import './App.css';
import { TextForm } from './components/TextForm';

function App(props) {

  const mystyle = {
    color: "red",
    textAlign: "center"
  }
  return (
    <>
    <Nav navTitle = "TextUtils" />
      <h1 style={mystyle} className="name mt-3">
        {props.AppName}
      </h1>
      <div className="container">
        <TextForm heading = "Enter text to analyze" />
      </div>
    </>
  );
}

export default App;
