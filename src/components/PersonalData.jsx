import React from "react";

const PersonalData = (props) => {
  return (
    <>
      <div className="inner-cv">
        <div className="left">
          <div className="image">
            <img src={props.selectedImage} alt="" />
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <div className="address">
              {/* icon */}
              <p>
                {props.address}, {props.city}, {props.country}
              </p>
            </div>
            <div className="phone">
              {/* icon */}
              <p>{props.phone}</p>
            </div>
            <div className="email">
              {/* icon */}
              <p>{props.email}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="name">
            <h1>
              {props.firstName} {props.lastName}
            </h1>
          </div>
          <div className="job-title">
            <h3>{props.title}</h3>
          </div>
          <div className="short-discription">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
