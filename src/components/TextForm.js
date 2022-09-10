import { useState } from "react";


export function TextForm(props) {

  const [text, setText] = useState("Enter Text");

  const handleOnClick = () => {
    console.log("handleOnClick Has Been Clicked");
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
      <h2 className="mt-2 mb-3">{props.heading}</h2>
      <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick} >Convert To UpperCase</button>
      <button className="btn btn-primary float-right" onClick={clear} >Convert To UpperCase</button>

      <h3 id=""></h3>

    </>
  );
}
