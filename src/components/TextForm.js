import { useState } from "react";


export function TextForm(props) {

  const [text, setText] = useState("Enter Text");

  const handleOnClick = () => {
    // console.log("handleOnClick Has Been Clicked");
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }
  const handleOnChange = (event) =>{    
    console.log(setText(event.target.value));
    // document.getElementById('show').innerHTML = text;
  }

  const clear = () => {
    setText('');
  }

  return (
    <>
      <h1 style={{color: "#61dafb"}} className="mt-2 mb-3 font-weight-bold">{props.heading}</h1>
      <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick} >Convert To UpperCase</button>
      <button className="btn btn-primary float-right" onClick={clear} >Convert To UpperCase</button>

      <div className="container my-5">
        <h1 className="">Your Text Summary</h1>
        <h4>Words: <span style={{color: "#61dafb"}}>{text.split(" ").length}</span> </h4>
        <h4>Charater: <span style={{color: "#61dafb"}}>{text.length}</span> </h4>
      </div>

    </>
  );
}
