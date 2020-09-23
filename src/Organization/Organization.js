import React, { Component } from "react";
import './Organization.css'

export default function Organization() {
  const [orgId, setOrgId] = React.useState("");
  const [orgName, setOrgName] = React.useState("");
  const [parentOrgId, setParentOrgId] = React.useState("");
  const [orgCode, setOrgCode] = React.useState("");
  const [orgDescription, setOrgDescription] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      orgId: ${orgId}
      orgName: ${orgName}
      parentOrgId: ${parentOrgId}
      orgCode: ${orgCode}
      orgDescription: ${orgDescription}
    `);
    
    event.preventDefault();
  }

  return (
    <div class="container">
    <form onSubmit={handleSubmit}>
      <h1>Create Organization</h1>

    <div class="row">
     <div class="col-25">
         <label>
        Organization Name:
        </label>
     </div>
    <div class="col-75">
        <input
          name="orgName"
          type="orgName"
          value={orgName}
          onChange={e => setOrgName(e.target.value)}
          required />
     </div> 
     </div>
     <div class="row">
     <div class="col-25">
        <label>
        Parent Org Name:
        </label>
     </div>
     <div class="col-75">
        <input
          name="parentOrgId"
          type="parentOrgId"
          value={parentOrgId}
          onChange={e => setParentOrgId(e.target.value)}
        />
     </div>
     </div>
     <div class="row">
     <div class="col-25">
      <label>
        Organization Code:
        </label>
     </div>
     <div class="col-75">
        <input
          name="orgCode"
          type="orgCode"
          value={orgCode}
          onChange={e => setOrgCode(e.target.value)}
          required/>
      </div>
      </div>
      <div class="row">
     <div class="col-25">
        <label>
        Organization Description:
        </label>
    </div>
    <div class="col-75">
        <input
          name="orgDescription"
          type="orgDescription"
          value={orgDescription}
          onChange={e => setOrgDescription(e.target.value)}
          required/>
    </div>
    </div>
    <div class="row">
      <button>Submit</button>
    </div>
    </form>
    </div>
  );
}
