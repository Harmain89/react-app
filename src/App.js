import {Nav} from './components/Navbar'
import logo from './logo.svg';
import './App.css';

function App() {

  const mystyle = {
    color: "red",
    textAlign: "center"
  }
  return (
    <>
    <Nav navTitle = "TextUtils" />
      <h1 style={mystyle} className="name">
        Hello React
      </h1>
    </>
  );
}

export default App;
