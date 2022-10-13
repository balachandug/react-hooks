import React, { useEffect, useReducer, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function App() {

  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value="";
    color.current.value="#FF00FF";
  }

  return(
    <form onSubmit={submit}>
      <input 
        ref={sound}
        type="text" placeholder='Sound...'/>
      <input 
        ref={color}
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
