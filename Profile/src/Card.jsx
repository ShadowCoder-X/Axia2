import React from "react";
import pic from "./assets/images/pic12.jpeg";
function Card() {
  return (
    <div>
      <div className="profile">
        <div className="card">
          <div className="img">
            <img src="/assets/images/pic12.jpeg" alt="" />
          </div>

          <h1 className="heading">Hello World!</h1>

          <h3 className="name"></h3>

          <h3 className="role"></h3>

          <h3 className="bio"></h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
