import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <div className="App">
        <div className="glass"></div>
        <div className="z-index">
          <Nav />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default Home;
