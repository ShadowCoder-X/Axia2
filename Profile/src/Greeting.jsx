import React from "react";

const now = new Date();
const currentHour = now.getHours();

let Greet;

if (currentHour < 8) {
  Greet = "Good Morning, My princess.";
} else if (currentHour < 14) {
  Greet = "Good Afternoon, My Supreme Leader";
} else if (currentHour < 17) {
  Greet = "Good Evening, My Sweet Love";
} else {
  Greet = "Good Night";
}

function Greeting() {
  return (
    <div>
      <h1 className="heading">{Greet}!</h1>
    </div>
  );
}

export default Greeting;
