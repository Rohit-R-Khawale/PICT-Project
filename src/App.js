import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import "./App.css"
import {Link} from 'react-router-dom'
function App() {
   const [isLogined, setIsLogined]=useState(false)
  // setIsLogined will be used in Login page to check weather the user is logged in or not
  return (
    <div>
      {/* -------------------------------------- HOME PAGE UNLOGINED ------------------------------*/}
      <div className="homePageUL">
        <div className="NavContainer"><Navbar Login={isLogined}/></div>
        {/* Tagline */}
        <div className="tagLineHeading">
          <h1 className="tagLine">Navigating Path To Better Health</h1>
            {
              isLogined? 
              (<div className="loginButton">
              <Link to={"/login"}><button value="login" id="loginBtn">Book an Appointment</button></Link>
            </div>)
            :
              (<div className="loginButton">
                <Link to={"/login"}><button value="login" id="loginBtn"> Login to Continue </button></Link>
                </div>)
            }
            
            
        </div>
        
        {/* Review Section */}
        <div class="reviewSection">
              <div class="back">
              </div>
              <div class="reviewContent">
                  <div class="ratings">
                      <p>Atharva Joshi: Rating with img</p>
                      <p>Rohit Khawale: Rating with img</p>
                      <p>Vaishnavi Mankar: Rating with img</p>
                      <p>Shubham: Rating with img</p>
                  </div>
              </div>
            </div>
            <Footer/>
      </div>
      {/* ----------------------------------------HOME PAGE UNLOGINED FINISHED --------------------------- */}
    
    </div>
  )
}
export default App 
// export {LoginStatus}
