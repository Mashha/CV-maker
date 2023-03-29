import React from "react";

export default function Education(props) {
  return (
    <div className="data-education">
      <div className="data-education-inner">
        <input
          type="text"
          name="universityName"
          placeholder="University name"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date (YYYY)"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date (YYYY)"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <textarea
          type="text"
          name="educationDescription"
          placeholder="Description - type each sentence on a separate line"
          onChange={(e) => props.handleEducData(e, props.id)}
        ></textarea>
        <button onClick={() => props.deleteEduObj(props.id)}>Remove</button>
      </div>
    </div>
  );
}
