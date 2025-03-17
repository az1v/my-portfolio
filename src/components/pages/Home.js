import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>I'm Aziz Moe</h1>
      <h2> 
        
      </h2>
      <h4>WELCOME TO MY PORTFOLIO</h4>
      <Link to="/aboutMe">Learn More About Me</Link>
    </div>
  );
}

export default Home;