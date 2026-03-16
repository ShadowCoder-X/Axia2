import React from "react";

function Card(props) {
  // const {name, role, hobby, pic, bio } = props
  return (
    <div>
      <div className="profile">
        <div className="card">
          <div className="img">
            <img src={props.pic} alt={props.name} className="profile-img" />
          </div>

          <h3 className="name">Name: {props.name}</h3>

          <h3 className="role">Role: {props.role}</h3>

          <h3 className="hobby">Hobby: {props.hobby}</h3>

          <h3 className="bio">Bio: {props.bio}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
