import React from "react";
import tooth from "../imgs/tooth.png";
import needle from "../imgs/syringe.png";

function Hero() {
  return (
    <main>
      <section>
        <div className="grid j-c-s-b col-2 global-width a-i-c">
          <div className="hero-column">
            <img className="icon-abs" src={needle} alt="" />
            <span>FIND A DOCTOR EASY</span>
            <h1>Let's Find Your Doctor</h1>
            <p>
              A Union of Compassion + Healthcare. Achieving better health care
              one patient at a time.
            </p>
            <img className="tooth icon-abs" src={tooth} alt="" />
          </div>
          <div className="hero-column"></div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
