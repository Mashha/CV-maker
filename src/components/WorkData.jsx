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
          onChange={(e) => props.handleWorkData(e, props.id)}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={(e) => props.handleWorkData(e, props.id)}
        />
        <input
          type="text"
          name="dateFrom"
          placeholder="Start date (YYYY)"
          onChange={(e) => props.handleWorkData(e, props.id)}
        />
        <input
          type="text"
          name="dateTo"
          placeholder="End date (YYYY)"
          onChange={(e) => props.handleWorkData(e, props.id)}
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          onChange={(e) => props.handleWorkData(e, props.id)}
        />
        <button>Remove</button>
      </div>
    </div>
  );
}
