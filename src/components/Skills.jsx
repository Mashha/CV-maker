import React from "react";

function Skills(props) {
  return (
    <div className="data-skills">
      <input
        type="text"
        placeholder="Skill"
        name="skill"
        onChange={(e) => props.handleSkills(e, props.id)}
      />
    </div>
  );
}

export default Skills;
