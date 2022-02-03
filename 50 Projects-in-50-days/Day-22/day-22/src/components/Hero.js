import React from "react";
import tooth from "../imgs/tooth.png";
import needle from "../imgs/syringe.png";

function Hero() {
  return (
    <main>
      <section>
        <div className="grid j-c-s-b col-2 global-width a-i-c">
          <div className="hero-column">
            <img className="needle icon-abs" src={needle} alt="" />
            <span>FIND A DOCTOR EASY</span>
            <h1>Let's Find Your Doctor</h1>
            <p>
              A Union of Compassion + Healthcare. Achieving better health care
              one patient at a time.
            </p>
            <img className="tooth icon-abs" src={tooth} alt="" />
            <button className="hero-btn">Download the app.</button>
          </div>
          <div className="hero-column">
            <div className="btns-search-container flex j-c-s-b">
              <div className="btns-search">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2382/premium/2382533.png?token=exp=1643915915~hmac=e347130c68e6cdd5c34f63acb887d5ed"
                  alt=""
                />
                <img
                  src="https://cdn-icons.flaticon.com/png/512/508/premium/508826.png?token=exp=1643915915~hmac=67470f82a4d0b8629848d52dc0aaeb68"
                  alt=""
                />
                <img
                  src="https://cdn-icons.flaticon.com/png/512/3632/premium/3632618.png?token=exp=1643915915~hmac=aa7dc1833fad833ac3962472ecc211f8"
                  alt=""
                />
                <img
                  src="https://cdn-icons.flaticon.com/png/512/4320/premium/4320372.png?token=exp=1643915915~hmac=5800bd52341c71443e92c79ce0a7f57a"
                  alt=""
                />
                <input type="search" name="" id="" placeholder="search" />
              </div>
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="card-img-text">
                  <span>Chester Huff</span>
                  <span>Heart Surgeon, London</span>
                  <button>Appointment</button>
                </div>
                <div className="heart-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="card-centre">
              <div className="card-img-wrapper">
                <div className="card-centre-txt">
                  <span>Deanna Wood</span>
                  <span>Heart Surgeon, London</span>
                </div>
                <div className="card-centre-img">
                  <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-centre-lower-txt flex a-i-c">
                <span>Available for your needs</span>
                <button>Book appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
