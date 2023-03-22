import React from "react";

export default function Education(props) {
  return (
    <div className="data-education">
      <h1>Education</h1>
      <div className="data-education-inner">
        <input
          type="text"
          name="universityName"
          placeholder="University name"
          onChange={props.handleEducData}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={props.handleEducData}
        />
        <input
          type="text"
          name="educationDescription"
          placeholder="Description"
          onChange={props.handleEducData}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date (YYYY)"
          onChange={props.handleEducData}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date (YYYY)"
          onChange={props.handleEducData}
        />
        <button>Remove</button>
        <button onClick={props.newEducationData}>Add more</button>
      </div>
    </div>
  );
}
