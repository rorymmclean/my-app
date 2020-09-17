import React from 'react';
import './TimeCard.css';
import TimesheetHistory from './TimesheetHistory/TimesheetHistory2';
import TimesheetWeeklyInput from './Timesheet/TimesheetWeeklyInput';

class TimeCard extends React.Component {
    constructor(props) {
      super(props);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.state = {username: 'Jason DeLano', 
                    timecardHistory: [],
                    taskList: [], 
                    task: '', 
                    hours: '', 
                    timecardDate: '2020-01-01',
                    timecardWeekEndingDate: '2020-09-06'};  
    }

    findTasks() {
      var baseUrl = "http://localhost:8880/timesheet/taskListObj&";
      var fullUrl = baseUrl + this.state.username;

      fetch(fullUrl)
          .then(res => res.json())
          .then(res => { this.setState({ taskList: res }); 
                          console.log('Result from Task Retreival');
                          console.log(res);
                         });
    }

    componentDidMount() {
      this.findTasks();
    }

    handleValueChange(props) {
      this.setState((state) => {
        if ( props.type === 'task')
        { return { task: props.value }} 
        else if (props.type === 'hours')
        { return { hours: props.value}}
        else if (props.type === 'timecardDate')
        { return { timecardDate: props.value}}
      });
    }

    submitTime = () => {
//      const timesheet = {task: this.state.task};
      console.log(`the value of hours .... ${this.state.hours.value}`);
      console.log(`the value of task .... ${this.state.task.value}`);
      console.log(`the value of timecardDate .... ${this.state.timecardDate.value}`);
      this.createTimesheet();
    }

render() {

 // let username = 'Jason';
  //const taskValue = this.state.task

  return(
  <div className="Header">
    <h1>Welcome to the Time Entry System, {this.state.username}!</h1>
      <TimesheetWeeklyInput resourceName={this.state.username} />
      <TimesheetHistory resourceName={this.state.username} />
  </div>
);
}
}
/*      <TimesheetInput onTaskChange={this.handleValueChange} onClick={this.submitTime} lovData={this.state.taskList}/> */

export default TimeCard;
