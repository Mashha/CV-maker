import React from "react";

export default function WorkData(props) {
  return (
    <div className="data-experience">
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
        <textarea
          type="text"
          name="notes"
          placeholder="Description - type each sentence on a separate line"
          onChange={(e) => props.handleWorkData(e, props.id)}
        ></textarea>
        <button onClick={() => props.deleteWorkObj(props.id)}>Remove</button>
      </div>
    </div>
  );
}
