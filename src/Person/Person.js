import React from 'react';
// import ReactWidgets from 'react-widgets';
//import DropdownList from 'react-widgets/lib/DropdownList';

class Person extends React.Component {
  constructor(props) {
    super(props);
//    this.handleTask = this.handleTask.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);  
//    this.handleHours = this.handleHours.bind(this);
//    this.handleDate = this.handleDate.bind(this);
//    this.handleChange = this.handleChange.bind(this);
  }

// handleChange(e) {
  //this.props.onTaskChange(e.target.value);
//  console.log(e.target.value);
//}

//handleTask(task) {
//  this.props.onTaskChange({value: task, type: "task"});
//  console.log(task);
//}

//handleHours(hours) {
//  this.props.onTaskChange({value: hours, type: "hours"});
//  console.log(hours);
//}

//handleDate(timecardDate) {
//  console.log(`The current timecard Date is ${timecardDate}`);
//  this.props.onTaskChange({value: timecardDate, type: "timecardDate"});
//  console.log(timecardDate.prototype.toString);
//  console.log(timecardDate);
//}

// handleSubmit() {
//  this.props.onClick();
//  console.log('Got handleSubmit');
//}

render() {
//  let taskItems = this.props.lovData;
//  const hoursList = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

  return (
     <div>
        <h2> {this.props.resourceName} </h2>
        <label>
            First Name:
            <input type="string" name="personName" />
        </label>
    </div>
  ); 
}
}

export default Person;