import React from "react";
import "./Smartbody.css";
import pic1 from './Smart.png';
import logo from './Group 407.png';
import Proimg from './Smartlux3.png';

const Smartbody = () => {
  return (
    <div className="body-div">
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
      <hr />
      <div className="image1-div">
      <i class="fa fa-map-marker" aria-hidden="true">  Lekki, Lagos Nigeria</i>
        <h2 className="vill">Meadow villa</h2>
        <div className="projectbutton-div">
          <button className="project-button">
            <div className="view-project">
            View Project
            </div>
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        </div>
        <div className="Project-div">
            <h2>
              Our projects
            </h2>
        </div>
        <div className="project1-div">
          <div className="serve1-div">
              <div className="pro-div"><img src={Proimg} alt="meadow-villa" className="meadow1-div" /></div>
              <h2 className="meadowtext1-div">Meadow Villa</h2>
          </div>
          <div className="serve2-div">
              <img src={pic1} alt="meadow-villa" className="meadow2-div" />
              <h2 className="orch">Orchid Apartment</h2>
          </div>
        </div>
        <hr />
        <div>
        <div className="About-div">
          <h2>
            About Us
          </h2>
        </div>
        <div className="about-us">
          <img src={pic1} alt="jimo-develop" className="jimo-develop" />
          <p className="about-text">
          Would you rather handle the daily management yourself but don’t want to bother advertising 
          the vacancy, showing the property at the tenant’s convenience and 
          screening the tenants? Then Placement might be right for you.



          </p>
        </div>
        </div> 
        <hr />
        <div>
          <div className="services-div">
            <h2>Our Services</h2>
          </div>
          <div className="service1-div">
            <img src={pic1} alt="services" className="services" />
            <p className="service1-h3">
               <h3 className="manage-div">
                 Property Management
               </h3>
               Would you rather handle the daily management yourself but don’t want to bother 
               advertising the vacancy, showing the property at the tenant’s convenience 
                and screening the tenants? Then Placement might be right for you.<br />
                </p>
          </div>
          <div className="service2-div">
            <img src={pic1} alt="services2" className="services" />
            <p className="service2-h3">
            <h3 className="prop-div">
                Property and Facility Management
              </h3>
              Would you rather handle the daily management yourself but don’t want to bother
               advertising the vacancy, showing the property at the tenant’s convenience
               and screening the tenants? Then Placement might be right for you.
             </p>
          </div>
        </div>
        <hr />
        <div className="footer-div">
            <div className="seperate-footer">
              <div className="contact-div">
                  <h2 className="h3-contact">
                    CONTACT US
                  </h2>
                  <p className="contact-p">
                  Do you want to make an enquiry, a complaint or you just want to know more about us? Then you’re on the right
                   Send us a message right here or contact us on any of the channels lised below.
                  </p>
                  <div className="all-icon">
                    <div className="marker-div">
                    <i class="fa fa-map-marker" aria-hidden="true"></i><p>1 Ayinke street, Akoka, Yaba, Lagos State, Nigeria.</p>
                    </div>
                    <div className="phone-div">
                    <i class="fa fa-phone" aria-hidden="true"></i><p>+2348099751498</p>
                    </div>
                    <div className="envelope-div">
                    <i class="fa fa-envelope-open" aria-hidden="true"></i><p>info@jimodevelopment.com</p>
                    </div>
                    <div className="whatsapp-div">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i><p>+2347084631267</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="h3-connect">
                      CONNECT WITH US
                    </h3>
                    <div className="social-icon">
                        <div className="instagram-div">
                        <i class="fa fa-instagram" aria-hidden="true" ></i>
                        </div>
                        <div className="facebook-div">
                        <i class="fa fa-facebook" aria-hidden="true" ></i>
                        </div>
                        <div className="twitter-div">
                        <i class="fa fa-twitter" aria-hidden="true" ></i>
                        </div>
                        <div className="linkedin-div">
                        <i class="fa fa-linkedin" aria-hidden="true" ></i>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="newsletter-div">
                <h2 className="h3-newsletter">
                  NEWSLETTER
                </h2>
                <p className="latest-div">
                  Get the latest updates and deals
                </p>
                <input type="text" required placeholder="Your Name" className="name-div"/>
                <input type="text" required placeholder="Your Email" className="email-div"/>
                <div>
                  <button className="subscribe-button">
                    Subscribe
                  </button>
                </div>
              </div> 
            </div>
            <div className="hr-div">
              <hr />
              <div>
                <h3 className="reserved-div">
                (c)2022-Jimo Property Development Limited. All Rights Reserved
                </h3>
              </div>
            </div>
          
        </div>
    </div>
  );
};

export default Smartbody;
