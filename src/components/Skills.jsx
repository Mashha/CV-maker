import React from "react";

function Skills(props) {
  return (
    <div className="data-skills">
      <div className="skill-input">
        <input
          type="text"
          placeholder="Skill"
          name="skill"
          onChange={(e) => props.handleSkills(e, props.id)}
        />
        <button
          className="remove-skill"
          onClick={() => props.deleteSkillObj(props.id)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default Skills;
