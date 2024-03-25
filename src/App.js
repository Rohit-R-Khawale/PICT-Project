import React from 'react'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import "./App.css"
function App() {

  return (
    <div>
      {/* -------------------------------------- HOME PAGE UNLOGINED ------------------------------*/}
      <div className="homePageUL">
        <div className="NavContainer"><Navbar/></div>
        {/* Tagline */}
        <div className="tagLineHeading">
          <h1 className="tagLine">Navigating Path To Better Health</h1>
            <div className="loginButton">
              <button value="login" id="loginBtn">Login to Continue</button>
            </div>
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
