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
          placeholder="Start date (YYYY)"
          onChange={props.handleWorkData}
        />
        <input
          type="text"
          name="dateTo"
          placeholder="End date (YYYY)"
          onChange={props.handleWorkData}
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          onChange={props.handleWorkData}
        />
        <button>Add more</button>
      </div>
    </div>
  );
}
