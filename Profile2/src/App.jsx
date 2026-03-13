import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import Card from "./Card";
import Button from "./Button";
import profilePics from "./assets/images/pic12.jpeg";

function App() {
  const data = [
    {
      id: 1,
      pic: profilePics,
      name: "Markay",
      role: "FullStack Developer",
      hobby: "Listening to music",
      bio: "Music",
    },
    {
      id: 2,
      pic: profilePics,
      name: "Yomi",
      role: "Data Analyst",
      hobby: "Clubbing",
      bio: "Just be on motion",
    },
    {
      id: 3,
      pic: profilePics,
      name: "Bori",
      role: "AL/ML",
      hobby: "Making Research",
      bio: "A Machinary Engineer",
    },
    {
      id: 4,
      pic: profilePics,
      name: "Feranmi",
      role: "Backend Developer",
      hobby: "Listening to music",
      bio: "Passionate about solving real world problems",
    },
    {
      id: 5,
      pic: profilePics,
      name: "Mayowa",
      role: "Web Developer",
      hobby: "Reading",
      bio: "Passionate about building E-commence",
    },
    {
      id: 6,
      pic: profilePics,
      name: "Bright",
      role: "Frondend Developer",
      hobby: "Coding",
      bio: "Building beautiful user interfaces",
    },
  ];

  const techSkills = ["HTML", "CSS", "REACT", "JAVASCRIPT"];

  return (
    <div>
      <Button>Load Users</Button>

      <ol>
        {techSkills.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ol>

      {/* {data.map((userCard) => (
        <Card
          key={userCard.id}
          pic={userCard.pic}
          name={userCard.name}
          role={userCard.role}
          hobby={userCard.hobby}
          bio={userCard.bio}
        /> 
      ))} */}

      {data.map((user) => {
        return <Card key={user.id} name={user.name} pic={user.pic} {...user} />;
      })}
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
