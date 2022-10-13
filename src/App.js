import logo from './logo.svg';
import './App.css';
import {TreesContext} from "./"
import { useContext } from 'react';

function App(props) {
  const {trees} = useContext(TreesContext);
  console.log(trees) 
  return(
    <div>
      <h1>Trees I have heard of</h1>
      <ul>
        {
          trees.map((tree, index) => (
            <li key={tree.id}>{tree.type}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
