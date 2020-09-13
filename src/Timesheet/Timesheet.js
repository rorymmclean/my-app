import React from 'react';
// import ReactWidgets from 'react-widgets';
import DropdownList from 'react-widgets/lib/DropdownList';

const timesheet = (props) => {

const hoursList = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
const taskList = ['HAIMS','DMHRSi', 'HIGLAS'];
// const location = [["Albany, NY","ALB"], ["Baltimore, MD", "BWI"]];

return (
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
    <input type="date" name="timecardDate"/>
  </div>
  <div className="twob">
    <DropdownList data={taskList} className='dropdown_customized' onChange={value => props.changed({ value })}/>
  </div>
  <div className="onec">
      <label> Hours: </label>
  </div>
  <div className="twoc">
      <DropdownList  data={hoursList} className='dropdown_customized' />
  </div>
  </div>
    )
}

export default timesheet;