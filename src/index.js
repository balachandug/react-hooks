import React, { createContext, useEffect, useReducer, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {useInput} from "./useInput"
import App from "./App"

export const TreesContext = createContext();

const trees = [
  {id:"1", type: "Maple"},
  {id:"2", type: "Oak"},
  {id:"3", type: "Family"},
  {id:"4", type: "Component"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{trees}}>
    <App/>
  </TreesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
