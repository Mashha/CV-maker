import React from "react";

export default function Template(props) {
  return (
    <div className="cv-template">
      <div className="template-left">
        <div className="left-inner">
          <div className="image">
            <img src={props.selectedImage} alt="" />
          </div>
          <div className="name-title">
            <h1>
              {props.firstName} {props.lastName}
            </h1>
            <h3>{props.title}</h3>
          </div>
          <div className="contact">
            <div className="address">
              {props.address} {props.city} {props.country}
            </div>
            <div className="email">{props.email}</div>
            <div className="phone">{props.phone}</div>
          </div>
          <div className="profile">
            <h3>Profile</h3>
            <p className="short-desc">{props.description}</p>
          </div>
          <div className="skills">{/* maybe skills */}</div>
        </div>
      </div>
      <div className="template-right">
        <div className="work-experience">
          <h1>Work experience</h1>
          {props.formDataWork.map(data => (
             <div className="work-experience-inner">
            <h3>{data.position}</h3>
            <div>
              <div className="company-name">{data.company}</div>
              <div className="date">
                {data.dateFrom} {data.dateTo}
              </div>
            </div>
            <div className="notes">
              <p>{data.notes}</p>
            </div>
          </div>
          ))
         }
        </div>
        <div className="education-history">
          <h1>Education history</h1>
          <div className="education-history-inner">
            <h3>{props.degree}</h3>
            <div>
              <div className="uni-name">{props.universityName}</div>
              <div className="uni-date">
                {props.startDate} {props.endDate}
              </div>
            </div>
            <div className="education-notes">{props.educationDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
