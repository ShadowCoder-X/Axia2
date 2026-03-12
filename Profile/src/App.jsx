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
      hobby: "Listening to music",
      bio: "Music",
    },
    {
      id: 3,
      pic: profilePics,
      name: "Bori",
      role: "FullStack Developer",
      hobby: "Listening to music",
      bio: "Music",
    },
    {
      id: 4,
      pic: profilePics,
      name: "Feranmi",
      role: "FullStack Developer",
      hobby: "Listening to music",
      bio: "Music",
    },
    {
      id: 5,
      pic: profilePics,
      name: "Mayowa",
      role: "FullStack Developer",
      hobby: "Listening to music",
      bio: "Music",
    },
    {
      id: 6,
      pic: profilePics,
      name: "Bright",
      role: "FullStack Developer",
      hobby: "Listening to music",
      bio: "Music",
    },
  ];

  return (
    <div>
      <Greeting />
      <Button />
      {data.map((userCard) => (
        <Card
          key={userCard.id}
          pic={userCard.pic}
          name={userCard.name}
          role={userCard.role}
          hobby={userCard.hobby}
          bio={userCard.bio}
        />
      ))}
    </div>
  );
}

export default App;
