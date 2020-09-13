import React from 'react';
// import ReactWidgets from 'react-widgets';
import DropdownList from 'react-widgets/lib/DropdownList';

class TimesheetInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleTask = this.handleTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.handleHours = this.handleHours.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

//handleChange(e) {
//  this.props.onTaskChange(e.target.value);
//  console.log(e.target.value);
//}

handleTask(task) {
  this.props.onTaskChange({value: task, type: "task"});
  console.log(task);
}

handleHours(hours) {
  this.props.onTaskChange({value: hours, type: "hours"});
  console.log(hours);
}

handleDate(timecardDate) {
  console.log(`The current timecard Date is ${timecardDate}`);
  this.props.onTaskChange({value: timecardDate, type: "timecardDate"});
//  console.log(timecardDate.prototype.toString);
//  console.log(timecardDate);
}

handleSubmit() {
  this.props.onClick();
  console.log('Got handleSubmit');
}

render() {
  let taskItems = this.props.lovData;
  const hoursList = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

  return (
    /*
    <div className="wrapper" >
    <div className="one">
        <label>
          Timecard Date:
        </label>
    </div>
    <div className="oneb">
      <label> 
          Task Name:
      </label>
    </div>
    <div className="two">
      <input type="date" name="timecardDate" onChange={ event => this.handleDate(event.target.value)}/>
    </div>
    <div className="twob">
      <DropdownList data={taskItems} className='dropdown_customized' onChange={value => this.handleTask({ value })} />
    </div>
    <div className="onec">
        <label> Hours: </label>
    </div>
    <div className="twoc">
        <DropdownList  data={hoursList} className='dropdown_customized' onChange={value => this.handleHours({ value })}/>
        <button onClick={this.handleSubmit}>Submit</button>
    </div>        
    </div>
    */
   <div>
     <table id='createTimecard'>
        <tbody>
          <tr>
            <th>Timecard Date</th>
            <th>Task Name</th>
            <th>Task Hours</th>
          </tr>
          <tr>
            <td><input type="date" name="timecardDate" onChange={ event => this.handleDate(event.target.value)}/></td>
            <td><DropdownList data={taskItems} className='dropdown_customized' onChange={value => this.handleTask({ value })} /></td>
            <td><DropdownList  data={hoursList} className='dropdown_customized' onChange={value => this.handleHours({ value })}/></td>
          </tr>
        </tbody>
     </table>
     <button onClick={this.handleSubmit}>Submit</button>
   </div>
  ); 
}
}

export default TimesheetInput;