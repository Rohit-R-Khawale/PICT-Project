import React ,{useState} from 'react'
import "./Navbar.css"
import LOGO from "./images/LOGO.jpeg"
function Index() {
  const[disply,setDisply]= useState("sideBar");
  function handelClick(){
    if(disply==="sideBar"){
    setDisply("noSidebar")}
    else{
      setDisply("sideBar")
    }
  }
  return (
    <div>
      <div className="heading">
        <div className="navbar">
                      <div className="navLeftSec">
                          <a href="#home" className="companyName">
                          <h1><img src={LOGO} alt="LOGO" id='LOGO'/>HealCare</h1>
                          </a>
                          <div className="sections">
                              <p>Home</p>
                              <p>Services</p>
                              <p>About Us</p>
                          </div>
                      </div>
                      <div className="navEnd">
                        <p className="freeAdvice">Get Free Advice</p>
                        <a href="#" onClick={handelClick}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                      </div>
                  </div>

                  <div className="sideBar" id={disply}>
                      <a href="#home" className="companyName">
                      <h1><img src={LOGO} alt="LOGO" id="LOGO"/>HealCare</h1>
                      </a>
                      <a href="#home"><p>Home</p></a>
                      <a href="#services"><p>Services</p></a>
                      <a href="#About Us"><p>About Us</p></a>
                      <p className="freeAdvice">Get Free Advice</p>
                      <a href="#" onClick={handelClick}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
                  </div>
      </div>
    </div>
  )
}

export default Index
