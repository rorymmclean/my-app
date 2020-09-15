import React from 'react';
import './TimesheetWeeklyHistory.css';

class TimesheetWeeklyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.drawTable = this.drawTable.bind(this);
    this.state = { weekEndingDate: '',
                   taskItems: [],
                   timesheet: [],
                   username: this.props.resourceName
                 };
  }

handleChange(e) {
    var timecardTaskValue = e.target.name.split('**',2);
    var timecardDateValue = e.target.name.split('**',1);
    this.setState({ timesheet: [...this.state.timesheet, {timecardDate: timecardDateValue[0], timecardTask: timecardTaskValue[1], timecardHours: e.target.value}]});
}

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
      this.findTasks();
}

handleSubmit() {

    var baseUrl = "http://localhost:8880/timesheet/createTimesheet";

    const newArray = this.state.timesheet;
    newArray.map((timecard,index) => {
      console.log(`timecard Date: ${timecard.timecardDate}, timecard Task: ${timecard.timecardTask}, timecard Hours: ${timecard.timecardHours}`);

      var fullUrl = baseUrl + "&" + this.state.username + "&" + timecard.timecardDate + "&" + timecard.timecardTask + "&" + timecard.timecardHours
    
      fetch(fullUrl)
          .then(res => { console.log(res) });
      return ( <h3> timecard created </h3>)
    });
  }

handleWeekEndingDate(newWeekEndingDate) {
  console.log(`The current timecard Week Ending Date is ${newWeekEndingDate}`);
  this.setState({ weekEndingDate: newWeekEndingDate })
}

drawTable(newWeekEndingDate) {
    var day1 = new Date(newWeekEndingDate);
    var day2 = new Date(newWeekEndingDate);
    var day3 = new Date(newWeekEndingDate);
    var day4 = new Date(newWeekEndingDate);
    var day5 = new Date(newWeekEndingDate);
    var day6 = new Date(newWeekEndingDate);
    var day7 = new Date(newWeekEndingDate);

    day1.setDate(day1.getDate() - 5);
    day2.setDate(day2.getDate() - 4);
    day3.setDate(day3.getDate() - 3);
    day4.setDate(day4.getDate() - 2);
    day5.setDate(day5.getDate() - 1);
    day6.setDate(day6.getDate() - 0);
    day7.setDate(day7.getDate() + 1);

    var day1Text = `${day1.getFullYear()}-${day1.getMonth() + 1}-${day1.getDate()}`;
    var day2Text = `${day2.getFullYear()}-${day2.getMonth() + 1}-${day2.getDate()}`;
    var day3Text = `${day3.getFullYear()}-${day3.getMonth() + 1}-${day3.getDate()}`;
    var day4Text = `${day4.getFullYear()}-${day4.getMonth() + 1}-${day4.getDate()}`;
    var day5Text = `${day5.getFullYear()}-${day5.getMonth() + 1}-${day5.getDate()}`;
    var day6Text = `${day6.getFullYear()}-${day6.getMonth() + 1}-${day6.getDate()}`;
    var day7Text = `${day7.getFullYear()}-${day7.getMonth() + 1}-${day7.getDate()}`;

    console.log(day1Text);

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
            let hoursday1 = `${day1Text}**${task}`;
            let hoursday2 = `${day2Text}**${task}`;
            let hoursday3 = `${day3Text}**${task}`;
            let hoursday4 = `${day4Text}**${task}`;
            let hoursday5 = `${day5Text}**${task}`;
            let hoursday6 = `${day6Text}**${task}`;
            let hoursday7 = `${day7Text}**${task}`;

            return (
            <tr key={index}> 
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


render() {

  return (
    <div>
        <h3>Select WeekEnding Date (Sundays)</h3>
        <input type="date" name="weekEndingDate" onChange={ event => this.handleWeekEndingDate(event.target.value)}></input>
    {this.state.weekEndingDate.length > 0 && (
    this.drawTable(this.state.weekEndingDate) )}
    </div>
  ); 
}
}

export default TimesheetWeeklyInput;