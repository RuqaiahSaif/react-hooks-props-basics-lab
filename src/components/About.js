import React from "react";
import Links from './Links'
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p> {props.bio}</p> :null}
    
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github="my git" linkedin="my linkedin" />
      
      {}
    </div>
  );
}

export default About;
