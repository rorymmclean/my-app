import React, { useState, Fragment } from "react";
import './Person.css';

//import "bootstrap/dist/css/bootstrap.css";
// -- This uses Hooks, versus 
const Person2 = () => {

const fieldList = ['firstName',
                     'middleName', 
                     'lastName',
                     'personRank',
                     'personGrade',
                     'personType',
                     'homeOrgId',
                     'workOrgId',
                     'elistmentDate',
                     'elistmentOrgId'];

const fieldListLabels = ['First Name:',
                        'Middle Name:',
                        'Last Name:',
                        'Person Rank:',
                        'Person Grade:',
                        'Person Type:',
                        'Home Organization:',
                        'Work Organization:',
                        'Enlistment Date:',
                        'Enlistment Organization:'
                        ];

const [fieldListValues, setFieldListValues] = useState([]);
                
const [inputFields, setInputFields] = useState([
        { firstName: 'Jason', middleName: '', lastName: '', personRank: '', 
          personGrade: '', personType: '', homeOrgId: '', workOrgId: '',
          elistmentDate: '', elistmentOrgId: ''}
      ]);

const handleSubmit = e => {
        e.preventDefault();
        console.log("fieldListValues", fieldListValues);
      };

const handleInputChange = (index, event) => {
        const values = [...fieldListValues];
        values[index] = event.target.value;
        setFieldListValues(values);
      };
/*
const createForm = () => {
    console.log(inputFields);
    return inputFields.map((inputField, index) =>
    (
    <ul key={index}>{inputField.label}</ul>
    /*<div>
        <label>Test</label>
                <input
                  type="text"
                  className="form-control"
                  id={inputField.label}
                  name={inputField.label}
                  value={setInputFields[index]}
                  onChange={event => handleInputChange(index, event)}
                />
    </div> 
    )
    )};
*/

  return (
    <>
    <div class="container">
      <h2> Enter Person Data </h2>
      <form onSubmit={handleSubmit}>
      {fieldList.map((inputField, index) =>
        ( <div class="row">
            <div class="col-25">
                <label>{fieldListLabels[index]}</label>
            </div>
            <div class="col-75">
                <input type="text" id={inputField} name={inputField} value={fieldListValues[{index}]} onChange={event => handleInputChange(index, event)} />
            </div>
          </div> 
        ))}
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Person2;