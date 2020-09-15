import React from 'react';
import './TimesheetHistory.css';
// import ReactWidgets from 'react-widgets';
//import DropdownList from 'react-widgets/lib/DropdownList';

class TimesheetHistory extends React.Component {
  constructor(props) {
    super(props);
//    this.handleTask = this.handleTask.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);  
//    this.handleHours = this.handleHours.bind(this);
    this.state = {timecardHistory: []};
  }


  retreiveTimecardHistory() {
    var baseUrl = "http://localhost:8880/timesheet/resourceName&";
    var fullUrl = baseUrl + this.props.resourceName;

    fetch(fullUrl)
        .then(res => res.json())
        .then(res => { this.setState ({timecardHistory: res}); 
                        console.log('Result from API call');
                        console.log(res);
                       });
//    return( timecardHistory )
  }

  componentDidMount() {
    //  this.callAPI();
      this.retreiveTimecardHistory();
    }

 //   renderTableHeader() {
 //       let header = Object.keys(this.state.timecardHistory[0]);
 //       console.log(`Header Row ${header}`);
 //       return header.map((key, index) => {
 //          return <th key={index}>{key}</th> 
 //       })
 //    }

    renderTableData() {
        return this.state.timecardHistory.map((timecard, index) => {
           const { date, hours, taskName, taskOrg } = timecard //destructuring
           const newdate = date.split('T',1); // Return the desired format of the date
           return (
              <tr key={index}>
                 <td>{taskName}</td>
                 <td>{taskOrg}</td>
                 <td>{hours}</td>
                 <td>{newdate}</td>
              </tr>
           )
        })
     }

render() {

//  this.timecardHistory = this.retreiveTimecardHistory(this.props.resourceName);
//  console.log(`Current Value of timecard History is ${this.state.timecardHistory}`);


  return (
    <div>
        <h1>Timecard History</h1>
        <table id='timecard'>
               <tbody>
                   <tr>
                       <th>Task Name</th>
                       <th>Task Org</th>
                       <th>Task Hours</th>
                       <th>Task Date</th>
                   </tr>
                  {this.renderTableData()}
               </tbody>
        </table>
    </div>
    ); 
}
}

export default TimesheetHistory;