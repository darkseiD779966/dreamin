import React from 'react'
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import dream from "./dream.png";
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={dream} alt=""></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active"  href="#home">Home</a>
        <a className="nav-link active" href="#aboutus">AboutUs</a>
        <a className="nav-link active" href="#page1">Services</a>
        <a className="nav-link active" href="#contact">ContactUs</a>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar