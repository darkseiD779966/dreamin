import React from 'react';
import './contact.css';
import {BiLogoFacebookSquare} from "react-icons/bi";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {TfiEmail} from "react-icons/tfi";
function Contact() {
  return (
    <section id="contact">
      <div className='duffer'>
      <form className="text-center border border-light p-5" action="#!">
        <p className="h4 mb-4">Contact us</p>

        <input
          type="text"
          id="defaultContactFormName"
          className="form-control mb-4"
          placeholder="Name"
        />

        <input
          type="email"
          id="defaultContactFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
        />

        <label>Subject</label>
        <select className="browser-default custom-select mb-4">
          <option value="" disabled>Choose option</option>
          <option value="1" selected>Feedback</option>
          <option value="2">Report a bug</option>
          <option value="3">Feature request</option>
          <option value="4">Feature request</option>
        </select>

        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="custom-control custom-checkbox mb-4">
          <input
            type="checkbox"
            className="custom-control-input"
            id="defaultContactFormCopy"
          />
          <label
            className="custom-control-label"
            htmlFor="defaultContactFormCopy"
          >
            Send me a copy of this message
          </label>
        </div>

        <button className=" car " type="submit">Send</button>
      </form>
  <div className="footer">
    <div className="footer-contact">
      <div className="oppo ms-auto">
      <ul className="phone-list">
          <li>Ph: 8179613444</li>
          <li>Ph: 9177954555</li>
          <li>Ph: 9398086029</li>
        </ul></div> </div>

        {/* Address */}
        <div classname="footer-address">
        <address className="address">
          <p> address : Plot No 57, 1st Floor</p>
          <p>Sri Nagar Colony, Opp SBI Bank Street</p>
          <p>Saket Road, ECIL Kapra</p>
          <p>Hyderabad - 500062, TS</p>
          <p>Tel: 04015894250</p>
        </address></div>
     
<div className="footer-social">
<a href={"#"} target="_blank" rel="noopener noreferrer">
<BiLogoFacebookSquare /></a>
<a href={"https://www.instagram.com/sigmaware_developers/"} target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
<a href={"https://wa.me/9177954555"} target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a>
<a href="#" target="_blank" rel="noopener noreferrer"><TfiEmail />admin@dreamininteriors.com</a>
</div>
      </div></div>
      </section>
  );
}

export default Contact;
