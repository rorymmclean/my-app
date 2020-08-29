import React from 'react';
import logo from './logo.svg';
import './HelloWorld.css';

function HelloWorld() {

const hoursList = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

return(

<div className="HelloWorld">
    <header className="App-header">
      <h3>Timesheet Entry</h3>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Timecard Date:
        <input type="date" name="timecardDate"/>
      </label>
      <label>
        Task Name:
        <input type="text" name="task"/>
      </label>
      <label>
        Hours:
        <input type="int" name="hours"/>
      </label>
        <input type="submit" value="Submit" />
    </form>
    </header>
    </div>
)

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  ); */
}

export default HelloWorld;
