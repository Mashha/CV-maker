import React from "react";

export default function WorkData(props) {
  return (
    <div className="data-experience">
      <h1>Experience</h1>
      <div className="data-experience-inner">
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={props.handleWorkData}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={props.handleWorkData}
        />
        <input
          type="text"
          name="cityWork"
          placeholder="City"
          onChange={props.handleWorkData}
        />
        <input
          type="text"
          name="dateFrom"
          placeholder="From (2015)"
          onChange={props.handleWorkData}
        />
        <input
          type="text"
          name="dateTo"
          placeholder="To (2017)"
          onChange={props.handleWorkData}
        />
        <button>Add more</button>
      </div>
    </div>
  );
}
