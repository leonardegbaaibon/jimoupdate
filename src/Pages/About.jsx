import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './About.css';
import { FaGitAlt } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';
import { RiUserVoiceFill } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GrLinkedin } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';
// import pic1 from './Smart.png';
import logo from './Group 407.png';
import Proimg from './Smartlux3.png';
// import { Outlet, Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<div className="nav-bar">
				<div className="logo-div">
					<img src={logo} alt="logo" className="logo1-div" />
				</div>
				<ul>
					<li>
						<b>
							<a href="#project" className="pro-div">
								Projects
							</a>
						</b>
					</li>
					<li>
						<b>
							<a href="#news" className="pro-div">
								About Us
							</a>
						</b>
					</li>
					<li>
						<b>
							<a href="#contact" className="pro-div">
								Services
							</a>
						</b>
					</li>
					<li>
						<b>
							<a href="#about" className="pro-div">
								Contact Us
							</a>
						</b>
					</li>
				</ul>
			</div>
			<hr />.
			<div className="slide-div">
				<Slide easing="ease" className="move-div">
					<div className="each-slide">
						<div className="slide1-div">
							<div className="image1-div">
                <p className="location-dot">
                <MdLocationPin/> Lekki Lagos,Nigeria
                </p>
								<h2 className="vill1">Meadow villa</h2>
								<div className="projectbutton-div">
									<button className="project-button">
										<div className="view-project">
											<h3 />
											View Project
										</div>
										<i class="fa fa-long-arrow-right" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="each-slide">
						<div className="slide2-div">
							<div className="image1-div">
              <p className="location-dot">
                <MdLocationPin/> Lekki Lagos,Nigeria
                </p>
								<h2 className="vill2">Orchid Apartment</h2>
								<div className="projectbutton-div">
									<button className="project-button">
										<div className="view-project">
											<h3 />
											View Project
										</div>
										<i class="fa fa-long-arrow-right" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="each-slide">
						<div className="slide3-div">
							<div className="image1-div">
              <p className="location-dot">
                <MdLocationPin/> Lekki Lagos,Nigeria
                </p>
								<h2 className="vill3">Meadow villa</h2>
								<div className="projectbutton-div">
									<button className="project-button">
										<div className="view-project">View Project</div>
										<i class="fa fa-long-arrow-right" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</Slide>
			</div>
      <div className="body-flex">
			<div className="flex-about">
				<div className="about-toflex">
          <div >
          <h2>About Us</h2>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At modi aspernatur
             enim ea iure consequatur expedita quaerat nisi cupiditate ipsa.
             Qui fuga saepe consequuntur fugiat iure nostrum placeat reiciendis modi.
          </b>
          </div>
          <div>
          <h2>Mission</h2>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At modi aspernatur
             enim ea iure consequatur expedita quaerat nisi cupiditate ipsa.
             Qui fuga saepe consequuntur fugiat iure nostrum placeat reiciendis modi.
          </b>
          </div>
          <div>
          <h2>Vision</h2>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At modi aspernatur
             enim ea iure consequatur expedita quaerat nisi cupiditate ipsa.
             Qui fuga saepe consequuntur fugiat iure nostrum placeat reiciendis modi.
          </b>
          </div>
				</div>
				<div className="corevalue-toflex">
					<h2>OUR CORE VALUE</h2>
					<div>
						<div className="flex-to1">
							<div className="integrity-div">
								<div className="integrity-title">
									<h1>
										<FaGitAlt />
									</h1>
									<b>Integrity</b>
								</div>
								<div>
									<b>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni veritatis,
										architecto voluptatibus repellat eveniet non nobis dicta ab, inventore
										exercitationem consequuntur consequatur a aliquam in quasi amet sed quae.
									</b>
								</div>
							</div>
							<div className="innovation-div">
								<div className="innovation-title">
									<h1>
										<HiOutlineLightBulb />
									</h1>
									<b>Innovation</b>
								</div>
								<div>
									<b>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni veritatis,
										architecto voluptatibus repellat eveniet non nobis dicta ab, inventore
										exercitationem consequuntur consequatur a aliquam in quasi amet sed quae.
									</b>
								</div>
							</div>
						</div>
						<div className="flex-to2">
							<div className="excellence-div">
								<div className="excellence-title">
									<h1>
										<MdApi />
									</h1>
									<b>Excellence</b>
								</div>
								<div>
									<b>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni veritatis,
										architecto voluptatibus repellat eveniet non nobis dicta ab, inventore
										exercitationem consequuntur consequatur a aliquam in quasi amet sed quae.
									</b>
								</div>
							</div>
							<div className="customer-div">
								<div className="customer-title">
									<h1>
										<RiUserVoiceFill />
									</h1>
									<b>Customer Centricity</b>
								</div>
								<div>
									<b>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni veritatis,
										architecto voluptatibus repellat eveniet non nobis dicta ab, inventore
										exercitationem consequuntur consequatur a aliquam in quasi amet sed quae.
									</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div className="management-team">
        <h2>
          THE MANAGEMENT TEAM
        </h2>
        <div className="about-ceo">
          <img src={Proimg} alt="" />
          <div className="ceo-div">
            <h2>Onyekachi Humphrey Ujebe</h2>
            <p>MD/CEO</p>
            <p className="ceo-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quam molestiae 
              voluptatem accusamus illo consequatur deserunt sed officiis adipisci,
               fuga vitae? Mollitia, laboriosam ipsum aut sapiente at in placeat architecto.
            </p>
            <p className="linkedin">
            <GrLinkedin />
            </p>
          </div>
        </div>
        <div className="legal-adviser">
          <img src={Proimg} alt="" />
          <div className="adviser-div">
            <h2>Onyekachi Humphrey Ujebe</h2>
            <p>Legal Adviser</p>
            <p className="adviser-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quam molestiae 
              voluptatem accusamus illo consequatur deserunt sed officiis adipisci,
               fuga vitae? Mollitia, laboriosam ipsum aut sapiente at in placeat architecto.
            </p>
            <p className="linkedin">
            <GrLinkedin />
            </p>
          </div>
        </div>
        <div className="sales-executive">
          <img src={Proimg} alt="" />
          <div className="salesexecutive-div">
            <h2>Niki</h2>
            <p>Sales Executive</p>
            <p className="executive-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quam molestiae 
              voluptatem accusamus illo consequatur deserunt sed officiis adipisci,
               fuga vitae? Mollitia, laboriosam ipsum aut sapiente at in placeat architecto.
            </p>
            <p className="linkedin">
            <GrLinkedin />
            </p>
          </div>
        </div>
      </div>
      </div>
			<div className="footer-div">
				<div className="seperate-footer">
					<div className="contact-div">
						<h2 className="h3-contact">CONTACT US</h2>
						<p className="contact-p">
							Do you want to make an enquiry, a complaint or you just want to know more about us? Then
							you’re on the right Send us a message right here or contact us on any of the channels lised
							below.
						</p>
						<div className="all-icon">
							<div className="marker-div">
								<i class="fa fa-map-marker" aria-hidden="true" />
								<p>1 Ayinke street, Akoka, Yaba, Lagos State, Nigeria.</p>
							</div>
							<div className="phone-div">
								<i class="fa fa-phone" aria-hidden="true" />
								<p>+2348099751498</p>
							</div>
							<div className="envelope-div">
								<i class="fa fa-envelope-open" aria-hidden="true" />
								<p>info@jimodevelopment.com</p>
							</div>
							<div className="whatsapp-div">
								<i class="fa fa-whatsapp" aria-hidden="true" />
								<p>+2347084631267</p>
							</div>
						</div>
						<div>
							<h3 className="h3-connect">CONNECT WITH US</h3>
							<div className="social-icon">
								<div className="instagram-div">
									<i class="fa fa-instagram" aria-hidden="true" />
								</div>
								<div className="facebook-div">
									<i class="fa fa-facebook" aria-hidden="true" />
								</div>
								<div className="twitter-div">
									<i class="fa fa-twitter" aria-hidden="true" />
								</div>
								<div className="linkedin-div">
									<i class="fa fa-linkedin" aria-hidden="true" />
								</div>
							</div>
						</div>
					</div>
					<div className="newsletter-div">
						<h2 className="h3-newsletter">NEWSLETTER</h2>
						<p className="latest-div">Get the latest updates and deals</p>
						<input type="text" required placeholder="Your Name" className="name-div" />
						<input type="text" required placeholder="Your Email" className="email-div" />
						<div>
							<button className="subscribe-button">Subscribe</button>
						</div>
					</div>
				</div>
				<div className="hr-div">
					<hr />
					<div>
						<h3 className="reserved-div">(c)2022-Jimo Property Development Limited. All Rights Reserved</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
