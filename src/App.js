import {Nav} from './pages/Navbar'
import logo from './logo.svg';
import './App.css';
// import './pages/Navbar';

function App() {

  const mystyle = {
    color: "red",
    textAlign: "center"
  }
  return (
    <>
    <Nav />
      <h1 style={mystyle} className="name">
        Hello React
      </h1>
    </>
  );
}

export default App;
