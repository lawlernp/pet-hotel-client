import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Owners from '../Owners/Owners';

function App(props) {

  const handleTestClick = () => {
    axios.get('/api/test').then(response => {
      console.log('response in handleTestClick = ', response);
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect  (() => {
    props.dispatch({type: "FETCH_PETS"});
  }
  ,[]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleTestClick}>CLICK ME</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {JSON.stringify(props.store.pets)}
        <Owners />
      </header>
    </div>
  );
}

export default connect(mapStoreToProps)(App);
