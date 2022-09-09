import logo from './logo.svg';
import './App.css';

function App() {

  const user = {
    fname: "Harmain",
    lname: "Rizwan"
  }

  let name = <h2> {user.fname} </h2>;

  function fullname() {
    return(
      <h1> {user.fname + " " + user.lname} </h1>
    );
  }

  function chname(nm) {
    document.getElementById('bt').addEventListener("click", (nm) => {
      let name = document.getElementById('gt');
      nm = name;
      return(
        <h1> {nm} </h1>
      );
    });
  }

  return (
    <div className="App">
      <input type="text" id='gt' />
      <button id='bt'>Show</button>
      {/* {fullname()} */}
      {chname()}
      {/* {name} */}
    </div>
  );
}

export default App;
