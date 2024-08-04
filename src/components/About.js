import React from "react";
import Links from "./Links";

function About(props) {
  
  function renderBio() {
    if (props.bio && props.bio.trim() !== "") {
      return <p>{props.bio}</p>;
    }

    return null;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
