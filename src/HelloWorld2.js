import React, { Component } from 'react';
// import logo from './logo.svg';
import './HelloWorld.css';
// import ReactWidgets from 'react-widgets';
// import { render } from '@testing-library/react';
import TimesheetInput from './Timesheet/Timesheet';

class HelloWorld2 extends Component {

  state = {
    user: [
      { name: 'Steve', rank: 'sgt first class'}
    ],
    timecards: [
      { id: 'one', date: null, task: 'HAIMS', hours: null }
    ]
  }


  submitTimesheet = () => {
    console.log(`Was submitted ${this.state.user[0].rank}`);
  }

  nameChangedHandler = ( event, id ) => {
  const timecardIndex = this.state.timecards.findIndex( p=> {
    return p.id === id
  });

  const timecard = {
    ...this.state.timecards[timecardIndex]
  }

  timecard.task = event.target.value;

  const timecards =  [...this.state.timecards];
  timecards[timecardIndex] = timecard;

  this.setState( {timecards: timecards} );
}

render () {
  let timecard = null;

  timecard = {this.state.timecards.map((timesheet, index) => {

  })}
 return(
  <div className="Header">
    <h1>Welcome {this.state.user[0].name}!</h1>
      <h3>Timesheet Entry</h3>
      <Timesheet name={this.state.user[0].name} changed={(event) => this.nameChangedHandler(event, timecard.id)}/>
      <button onClick={this.submitTimesheet}>Submit</button>
  </div>
 );
 }
}

export default HelloWorld2;