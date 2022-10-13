import React, { useEffect, useReducer, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useInput} from "./useInput"


function App() {

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`)
    resetTitle();
    resetColor();
  }

  return(
    <form onSubmit={submit}>
      <input 
        {...titleProps}
        type="text" placeholder='Sound...'/>
      <input 
        {...colorProps}
        type="color"/>
      <button>ADD</button>
    </form>
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
