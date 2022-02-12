import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
function Hero() {
  return (
    <main>
      <section className="hero">
        <div className="col-2 global-width grid j-c-s-b a-i-c">
          <div className="hero-column-left">
            <h1>
              Consult a doctor anytme, anywhere by
              <span className="call"> video call.</span>
            </h1>
            <p>
              Talk with a doctor using our highly secure HIPPA compliant
              end-2-end encryption.
            </p>

            {/* BUTTON GOES HERE */}
            <div className="hero-btns-container">
              <button className="hero-btns purple-btn">
                <Link to="/form">Ask a doctor</Link>
              </button>
              <Modal />
            </div>
          </div>
          <div className="hero-column">
            <div className="doctor-img">
              <img
                src="https://pngimg.com/uploads/doctor/doctor_PNG16032.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="know-us">
        <div className="know-us-text-header t-a-c">
          <span>Why should you trust us?</span>
        </div>
        <div className="col-4 grid global-width j-c-s-b">
          <div className="card">
            <div className="card-img">
              <img
                src="https://cdn-icons.flaticon.com/png/512/3060/premium/3060348.png?token=exp=1643989082~hmac=5c83b4b8437f4f2875ee92dc099d4295"
                alt=""
              />
            </div>
            <div className="card-text t-a-c">
              <h3>All specialist</h3>
              <p>You can reach out to 3500+ doctors and 80+ specialists.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://cdn-icons.flaticon.com/png/512/473/premium/473622.png?token=exp=1643990753~hmac=e13f9a364fa4a6443417db30968a139a"
                alt=""
              />
            </div>
            <div className="card-text t-a-c">
              <h3>Private & Secure</h3>
              <p>
                All your data is protected and secure with trusted SSl and rest
                encryption
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://cdn-icons.flaticon.com/png/512/3201/premium/3201521.png?token=exp=1643991004~hmac=5558b2c3d808428fb6c0c9a38c22a126"
                alt=""
              />
            </div>
            <div className="card-text t-a-c">
              <h3>Millions of customers</h3>
              <p>Trusted by millions and serving users worldwide</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://cdn-icons.flaticon.com/png/512/1698/premium/1698535.png?token=exp=1643991128~hmac=1f5b27a0a366483c0234bd587445eeab"
                alt=""
              />
            </div>
            <div className="card-text t-a-c">
              <h3>Chatbot support</h3>
              <p>
                Get access to doctors via chat bots for a fantasic health care
                service
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
