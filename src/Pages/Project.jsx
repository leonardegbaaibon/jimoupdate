import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Smartbody.css";
// import pic1 from './Smart.png';
import logo from './Group 407.png';
// import Proimg from './Smartlux3.png';
import { Outlet, Link } from "react-router-dom";




const Project = () =>{
    return(
        <div>
             <div className="nav-bar">     
        <div className="logo-div">
          <img src={logo} alt="logo" className="logo1-div" />
        </div>
        <ul>
  <li><b><a href="#project" className="pro-div">Projects</a></b></li>
  <li><b><a href="#news" className="pro-div">About Us</a></b></li>
  <li><b><a href="#contact"className="pro-div">Services</a></b></li>
  <li><b><a href="#about" className="pro-div">Contact Us</a></b></li>
</ul>
      </div>
      <hr />.
        <div className="slide-div">
        <Slide easing="ease" className="move-div">
          <div className="each-slide">
            <div className="slide1-div">
              <div className="image1-div">
              <i class="fa fa-map-marker" aria-hidden="true">  Lekki, Lagos Nigeria</i>
        <h2 className="vill1">Meadow villa</h2>
        <div className="projectbutton-div">
          <button className="project-button">
            <div className="view-project">
            View Project
            </div>
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
            </div>
          </div>
          </div>
          <div className="each-slide">
            <div className="slide2-div" >
            <div className="image1-div">
              <i class="fa fa-map-marker" aria-hidden="true">  Lekki, Lagos Nigeria</i>
        <h2 className="vill2">Orchid Apartment</h2>
        <div className="projectbutton-div">
          <button className="project-button">
            <div className="view-project">
            View Project
            </div>
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
            </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide3-div">
            <div className="image1-div">
              <i class="fa fa-map-marker" aria-hidden="true">  Lekki, Lagos Nigeria</i>
        <h2 className="vill3">Meadow villa</h2>
        <div className="projectbutton-div">
          <button className="project-button">
            <div className="view-project">
            View Project
            </div>
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
            </div>
            </div>
          </div>
        </Slide>
        </div>
        </div>
    )
}
export default Project