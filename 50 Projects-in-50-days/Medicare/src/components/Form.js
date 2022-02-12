import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "" || number === "" || website === "") {
      alert("Please enter all the details.");
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="form-container">
      <form id="contact" action="" method="post">
        <fieldset>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabindex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Your Web Site (optional)"
            type="url"
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            onClick={handleSubmit}
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
