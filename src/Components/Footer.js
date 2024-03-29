import React from 'react'
import "./Footer.css"
import LOGO from "./images/LOGOrb.png"
import insta from "./images/Instagram.png"
import facebook from "./images/facebook.png"
import whatsapp from "./images/whatsapp.png"

function Footer() {
  return (
    <div>
      <div className="footer">
        {/* 1st section of the footer containig the Basic Info about the developers of the Website */}
        <div className="BasicInfo">
          <span className="BasicSecHead">
            <img src={LOGO} alt="" id="LOGO" />
            <h2>HealCare</h2>
          </span>
          <span className="Members">
            <p>Shubham Kharade</p>
            <p>Vaishnavi Mankar</p>
            <p>Rohit Khawale</p>
            <p>Atharv Joshi</p>
          </span>
        </div>
        {/* This is the 2nd section of the website which contain the Services which are provided by us */}
        <div className="Solutions">
          <h2>Solutions</h2>
          <span className="services">
            <a href="#Hospital"><p>Hospitals</p></a>
            <a href="#Medicals"><p>Medicals</p></a>
            <a href="#Laboratories"><p>Laboratories</p></a>
            <a href="#Home_Delivery"><p>Home Delivery</p></a>
          </span>
        </div>
        {/* The 3rd section provides us with our contcact information  */}
        <div className="Contact_US">
          <a href="">
            <h3>Contact us</h3>
          </a>
          <hr/>
          <a href="">
            <h3>Join us</h3>
          </a>
          <hr />
        </div>

        {/* The 4rt and Last section Provide link to our social Platforms  */}
        <div className="Social">
          <a href=""><img src={facebook} alt="facebook" /></a>
          <a href=""><img src={insta} alt="Instagram" /></a>
          <a href=""><img src={whatsapp} alt="whatsapp" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
