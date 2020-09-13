import React from 'react';
// import ReactWidgets from 'react-widgets';
//import DropdownList from 'react-widgets/lib/DropdownList';

class TimesheetWeeklyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.drawTable = this.drawTable.bind(this);
 //   this.handleDate = this.handleDate.bind(this);
    this.state = { weekEndingDate: '',
                   taskItems: ['Task1','Task2', 'Task3'],
                   timesheet: [],
                   username: this.props.resourceName
                 };
  }

handleChange(e) {
//  this.props.onTaskChange(e.target.value);
//    console.log(`The following is the variable name: ${e.target.name} and value: ${e.target.value}`);
    var timecardTaskValue = e.target.name.split('-',2);
    var timecardDateValue = e.target.name.split('-',1);
    this.setState({ timesheet: [...this.state.timesheet, {timecardDate: timecardDateValue[0], timecardTask: timecardTaskValue[1], timecardHours: e.target.value}]});
}
//    this.setState({timesheet: newTimesheet});
//    this.setState({timesheet: this.state.timesheet.map(item => {
//        if (timecardTaskValue[1] === item.timecardTask && timecardDateValue[0] === item.timecardDateValue)
//        {

//        console.log('update state')
//        const elementsIndex = this.state.timesheet.findIndex(element => (element.timecardTask === timecardTaskValue[1] && element.timecardDate === timecardDateValue[0]))
//        let newTimesheet = [...this.state.timesheet];
//        newTimesheet[elementsIndex] = {...newTimesheet[elementsIndex], timecardTask: timecardTaskValue[1], timecardDate: timecardDateValue[0], timecardHours: e.target.value};
//        return newTimesheet;
//        this.setState({timesheet: newTimesheet});
//        }
//        else {
//        console.log('create new state');  
//        this.setState(...this.state.timesheet, {timesheet: [{timecardDate: timecardDateValue[0], timecardTask: timecardTaskValue[1], timecardHours: e.target.value}]});
//        return {...this.state.timesheet, timesheet: [{timecardDate: timecardDateValue[0], timecardTask: timecardTaskValue[1], timecardHours: e.target.value}]}};
//        })
//    });
//    if (nextState.map(a => (a.timecardTask === timecardTask && a.timecardDate === timecardDateValue) => 
//        ({console.log('Test')});
//        );

//    const nextState = this.state.timesheet.map(a=> (a.timecardTask === timecardTaskValue && a.timecardDate === timecardDateValue) ? { ...a, timecardHours: e.target.value } : {timesheet: [{timecardDate: timecardDateValue[0], timecardTask: timecardTaskValue[1], timecardHours: e.target.value}]});
//    const elementIndex = this.state.timesheet.findIndex(e => (e.timecardDate === timecardDateValue & e.timecardTask === timecardTaskValue));
//    let newTimesheet = [...this.state.timesheet];
//    newTimesheet[elementIndex] = {...newTimesheet[elementIndex], timecardHours: e.target.value}
//    this.setState(nextState);
//    this.setState({timesheet: [...this.state.timesheet, {timecardDate: '', timecardTask: '', timecardHours: e.target.value}]});

/*
handleTask(task) {
  this.props.onTaskChange({value: task, type: "task"});
  console.log(task);
}

handleHours(hours) {
  this.props.onTaskChange({value: hours, type: "hours"});
  console.log(hours);
}
*/
findTasks() {
    var baseUrl = "http://localhost:8880/timesheet/taskListObj&";
    var fullUrl = baseUrl + this.state.username;

    fetch(fullUrl)
        .then(res => res.json())
        .then(res => { this.setState({ taskItems: res }); 
                        console.log('Result from Task Retreival');
                        console.log(res);
                       });
  }

componentDidMount() {
    //  this.callAPI();
      this.findTasks();
}

handleSubmit() {
    // this.props.onClick();
    const newArray = this.state.timesheet;
    console.log(newArray);

  }

handleWeekEndingDate(newWeekEndingDate) {
  console.log(`The current timecard Week Ending Date is ${newWeekEndingDate}`);
  this.setState({ weekEndingDate: newWeekEndingDate })
//  this.props.onTaskChange({value: timecardDate, type: "timecardDate"});
}

drawTable(newWeekEndingDate) {
    var day1 = new Date(newWeekEndingDate);
    var day2 = new Date(newWeekEndingDate);
    var day3 = new Date(newWeekEndingDate);
    var day4 = new Date(newWeekEndingDate);
    var day5 = new Date(newWeekEndingDate);
    var day6 = new Date(newWeekEndingDate);
    var day7 = new Date(newWeekEndingDate);

    day1.setDate(day1.getDate() - 6);
    day2.setDate(day2.getDate() - 5);
    day3.setDate(day3.getDate() - 4);
    day4.setDate(day4.getDate() - 3);
    day5.setDate(day5.getDate() - 2);
    day6.setDate(day6.getDate() - 1);

    return (
    <div>
    <table id='createWeeklyTimecard'>
        <tbody>
          <tr>
            <th></th>
            <th> Monday </th>
            <th> Tuesday </th>
            <th> Wednesday </th>
            <th> Thursday </th>
            <th> Friday </th>
            <th> Saturday </th>
            <th> Sunday </th>
          </tr>
          <tr>
            <th>Task Name</th>
            <th>{day1.toLocaleDateString()}</th>
            <th>{day2.toLocaleDateString()}</th>
            <th>{day3.toLocaleDateString()}</th>
            <th>{day4.toLocaleDateString()}</th>
            <th>{day5.toLocaleDateString()}</th>
            <th>{day6.toLocaleDateString()}</th>
            <th>{day7.toLocaleDateString()}</th>
          </tr>
            { this.state.taskItems.map((task,index) => {            
            let hoursday1 = `day1-${task}`;
            let hoursday2 = `day2-${task}`;
            let hoursday3 = `day3-${task}`;
            let hoursday4 = `day4-${task}`;
            let hoursday5 = `day5-${task}`;
            let hoursday6 = `day6-${task}`;
            let hoursday7 = `day7-${task}`;

            return (
            <tr> 
                <td> {task} </td>
                <td><input name={hoursday1} onChange={this.handleChange}/></td>
                <td><input name={hoursday2} onChange={this.handleChange}/></td>
                <td><input name={hoursday3} onChange={this.handleChange}/></td>
                <td><input name={hoursday4} onChange={this.handleChange}/></td>
                <td><input name={hoursday5} onChange={this.handleChange}/></td>
                <td><input name={hoursday6} onChange={this.handleChange}/></td>
                <td><input name={hoursday7} onChange={this.handleChange}/></td>
            </tr>
            )
            })}
        </tbody>
     </table>
     <button onClick={this.handleSubmit}>Submit</button>  
     </div>
    )   
}

/*

handleSubmit() {
  this.props.onClick();
  console.log('Got handleSubmit');
}
*/

render() {
//  let taskItems = this.props.lovData;
//  const hoursList = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

  return (
    <div>
        <h3>Select WeekEnding Date (Sundays)</h3>
        <input type="date" name="weekEndingDate" onChange={ event => this.handleWeekEndingDate(event.target.value)}></input>
    {this.state.weekEndingDate.length > 0 && (
    this.drawTable(this.state.weekEndingDate) )}
    </div>
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
/*   <div>
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
   */
  ); 
}
}

export default TimesheetWeeklyInput;