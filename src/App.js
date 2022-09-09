import logo from './logo.svg';
import './App.css';

function App() {

  const mystyle = {
    color: "red",
    textAlign: "center"
  }
  return (
    <>
      <h1 style={mystyle} className="name">
        Hello React
      </h1>
    </>
  );
}

export default App;
