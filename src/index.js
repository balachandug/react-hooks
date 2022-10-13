import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {FaStar} from "react-icons/fa"

const [first, second] = ["Alex", "Ali", "Anna"];
console.log(first)
console.log(second)

const [, , third] = ["Alex", "Ali", "Anna"];
console.log("third = ", third);

const createArray = (length) => [
  ...Array(length)
]

function Star({selected, onSelect}) {
  return(
    <FaStar 
    color={selected ? "red": "gray"}
    onClick={onSelect}
    ></FaStar>
  )
}

function StarRating({totalStars = 5}) { // If totalStars is not passed, default value is 5. 
  const [selectedStars, setSelectedStars] = useState(0);
  return (<>
    {createArray(totalStars).map((n, i) => (
    <Star key={i} 
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i+1)}
    />))}
    <p>{selectedStars} of {totalStars}</p>
  </>)
}

const initialState = {
  message: "hi"
}

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY, I just said ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      }
  }
}

function App() {
  const [status, setStatus] = useState("Not Delivered"); // Array destructuring
  // const [checked, setChecked] = useState(false);
  const [name, setName] = useState("Jan");

  const [data, setData] = useState([]);
  const [show, showData] = useState(true)

  const [number, setNumber] = useReducer((number, newNumber) => { return number + newNumber}, 0);
  const [checked, toggle] = useReducer((checked) => !checked, false);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]) // Empty array means, this get effected on initial page render.
  // Passing a state variable means, it gets effected everytime the variable changes.
  // if nothing is passed, it gets effected repeatedly infinite times.

  useEffect(() => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(setData)
  }, [show])

  return(
    <div>
      <h1>The package is: {status} </h1>
      <button className='primary' onClick={() => setStatus("Delivered")}>Deliver</button>

      <input type="checkbox" value={checked} onChange={() => toggle}></input>
      <p>{checked ? "checked" : "Not checked"}</p>

      <div>
        <StarRating totalStars={5}/>
      </div>

      <section>
        <p>Congratulations {name}</p>
        <button onClick={() => setName("will")}>Change Winner</button>
      </section>
      
        <section>
          <ul>

            {
            data.map((user, index) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
          <button onClick={() => {setData([]); showData(false)}} >Remove Data</button>
          <button onClick={() => showData(true)} >Show Data</button>
        </section>
      
      <section>
        <h1 onClick={() => setNumber(1)}>{number}</h1>
      </section>

      <section>
        <p>message: {state.message}</p>
        <button onClick={() => dispatch({type: "yell"})}>YELL</button>
        <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
      </section>
      
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={"Balu"}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
