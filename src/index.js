import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import PortfolioSection from './sections/portfolio';
import Typewriter from 'typewriter-effect';
import ContactForm from "./sections/contact-form";
import 'boxicons/css/boxicons.min.css';

const AppContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the menu toggle
  const handleClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const menuLi = document.querySelectorAll('header ul li a');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    // const menuIcon = document.querySelector('#menu-icon');
    // const navList = document.querySelector('.navList');

    // Function to highlight active menu item based on section scroll
    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
      menuLi.forEach(sec => sec.classList.remove('active'));
      if (len >= 0) {
        menuLi[len].classList.add('active');
      }
    };

    // Function to handle sticky header and menu close on scroll
    const handleScroll = () => {
      header.classList.toggle('sticky', window.scrollY > 50);
      // Close the menu if it is open when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false); // This will close the menu
      }
    };

    // Set initial active menu
    activeMenu();

    // Add event listeners
    window.addEventListener('scroll', activeMenu);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', activeMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]); // Use isMenuOpen dependency to close the menu on scroll
  
  return (
    <>
      <App />
      {/* NAVBAR-SECTION */}
      <header>
        <div className='logo'>
          <span>Fida</span>Khan.
        </div>
        <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div id="menu-icon" className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} onClick={handleClick}></div>
      </header>
      
          {/* HOME-SECTION */}

          <section id="home" className="home">
            <div className="home-content">
              <h1>Hi I'm Fida Khan</h1>
              <div className="change-text">
                <h3>And I'm </h3>
                <span className='auto-type'>
                    <Typewriter
                       options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: ["Dot net Developer","Frontend Developer", "Socket Programmer ", "Microsoft SQL Server Admin"]

                       }}
                    />

                </span>
              </div>

              <p>I am a passionate .NET Developer and Frontend Specialist with a knack for creating visually appealing and user-friendly applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React. My skills as a Socket Programmer enable real-time communication solutions, while my expertise in Microsoft SQL Server administration ensures efficient data management. I focus on clean code and engaging user experiences to deliver high-quality results.</p>


              <div className="btn-box">
                <a href={'Fida khan cv.pdf'} download={'Fida khan cv.pdf'} className="btn">Download CV</a>
                <a href="mailto:engrfidabettani@gmail.com" className="btn">Hire Me Now!</a>
              </div>


              <div className="social-icons">
                <a href="mailto:fidakhan185283@gmail.com"  title='email'><i class='bx bxs-envelope'></i></a>
                <a href="https://www.linkedin.com/in/fida-khan-767110240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  title='linkedin'><i className='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/fidakhanProg/my-portfolio.git" title='github'><i className='bx bxl-github' ></i></a>
                <a href="https://www.facebook.com/profile.php?id=100026060852750&mibextid=ZbWKwL" title='facebook'><i className='bx bxl-facebook'></i></a>
               <a href="https://www.tiktok.com/@thefkcircle?_t=8r6ixTGdLij&_r=1" title='tiktok'><i className='bx bxl-tiktok'></i></a>
</div>
            </div>

              <div className="home-image">
                    <div className="img-box">
                    <img src={`${process.env.PUBLIC_URL}/img/fida.png`} alt='Home' className="profile-img"/>

                    </div>
              </div>
          </section>

            {/* ABOUT-SECTION */}

          <section id="about" className="about">
     
                    <div className="img-box">
                    
                      <img src={`${process.env.PUBLIC_URL}/img/fidaa image.jpeg`} alt='Home' className="profile-img"/>
                    </div>
     

            <div className="about-content">
              <h2>About Me</h2>
              <h3>A story of good</h3>
              <p>
              My name is Fida Khan, and I am a passionate Software Engineer with a strong focus on building innovative applications. My journey began with a fascination for technology and its potential to solve real-world problems. I honed my skills in various programming languages and frameworks, with a particular emphasis on .NET for backend development and React Native for mobile applications.

From the outset, I was captivated by the power of .NET and its ability to create scalable, high-performance applications. This foundation led me to explore Microsoft SQL Server, where I developed expertise in database design and management, ensuring data integrity and efficiency in my projects.

My experience with Windows Services has equipped me with the knowledge to create reliable, long-running applications that run in the background, handling essential tasks without user intervention. I also delved into Socket Programming, enabling real-time communication for applications, which has become increasingly vital in today’s interconnected world.

As a Frontend Developer, I enjoy crafting user-centric interfaces that are both visually appealing and highly functional. Utilizing React.js, I focus on delivering seamless user experiences across devices, ensuring that my applications are responsive and engaging. </p>

            {/* <div className="btn-box">
              <a href="/" className='btn'>Read More!</a>
            </div> */}
            </div>

          </section>

            {/* SERVICES-SECTION */}

          <section id="services" className='services'>
            <div className="main-text">
              <span>What i will do for you</span>
              <h2>Our Services</h2>
            </div>

            <div className="section_services">
              <div className="service-box">
                <i className='bx bxs-layer service-icon'></i>
                <h3>Dot Net</h3>
                <p>
                Leverage the power of .NET to build robust, scalable applications tailored to your business needs. I specialize in creating high-performance web and desktop applications that ensure reliability and efficiency. With a strong focus on clean code and best practices, I integrate seamlessly with various databases, using Microsoft SQL Server to manage data effectively. My goal is to deliver solutions that not only meet your requirements but also enhance your operational capabilities and drive growth.</p>
              

              </div>

              <div className="service-box">
                <i className='bx bx-desktop service-icon'></i>
                <h3>Responsive Web Design</h3>
                <p>
                  Ensure your website looks great on all devices with mobile-first design.
                  I will ensure your website is responsive to any screen, from mobile to desktop. I design websites using CSS, Bootstrap, Tailwind, and modern layout techniques to make them fluid and functional on every platform. The user receives the same seamless experience, whether on a mobile or computer device.


                </p>
            
              </div>

              <div className="service-box">
                <i className='bx bx-code-alt service-icon'></i>
                <h3>React Js</h3>
                <p>
    Unlock the potential of your web applications with React.js, a powerful library for building dynamic user interfaces. I specialize in creating responsive and engaging web applications that deliver exceptional user experiences. By leveraging React’s component-based architecture, I ensure fast rendering and efficient updates, making your applications scalable and maintainable. Whether you need a single-page application or a complex web platform.
  </p>
             
              </div>

            </div>

          </section>

          {/* SKILLS-SECTION */}

          <section id="skills" className='skills'>
            <div className="main-text">
              <span>Technical and Professional</span>
              <h2>My Skills</h2>
            </div>

            <div className="skill-main">
              <div className="skill-left">
                <h3>Technical Skills</h3>

                <div className="skill-bar">
                  <div className="info">
                    <p>Dot Net c#</p>
                    <p>99%</p>
                  </div>
                  <div className="bar">
                    <span className='html'></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>Microsoft Sql Server</p>
                    <p>100%</p>
                  </div>
                  <div className="bar">
                    <span className='css'></span>
                  </div>
                </div>

                
                <div className="skill-bar">
                  <div className="info">
                    <p>Socket programming</p>
                    <p>87%</p>
                  </div>
                  <div className="bar">
                    <span className='bootstrap'></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>HTML/CSS/Bootstrap/Tailwind</p>
                    <p>100%</p>
                  </div>
                  <div className="bar">
                    <span className='tailwind'></span>
                  </div>
                </div>


                <div className="skill-bar">
                  <div className="info">
                    <p>JavaScript</p>
                    <p>74%</p>
                  </div>
                  <div className="bar">
                    <span className='javascript'></span>
                  </div>
                </div>

                
                <div className="skill-bar">
                  <div className="info">
                    <p>Java</p>
                    <p>55%</p>
                  </div>

                  
                  
                  <div className="bar">

                    <span className='react-js'></span>
                  </div>
                </div>

              </div>

              <div className="skill-right">
                <h3>Professional Skills</h3>
                <div className="radial-bars">

                  <div className="radial-bar">
                    <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                        <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                        <circle className='path path-1'  cx={"100"} cy={"100"} r={"80"}></circle>
                    </svg>
                    <div className='Percentage'>90%</div>
                    <div className='text'>Creativity</div>
                  </div>

                  <div className="radial-bar">
                    <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                        <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                        <circle className='path path-2'  cx={"100"} cy={"100"} r={"80"}></circle>
                    </svg>
                    <div className='Percentage'>65%</div>
                    <div className='text'>Communication</div>
                  </div>

                </div>

                <div className="radial-bars">
                    
                   <div className="radial-bar">
                        <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                            <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                            <circle className='path path-3'  cx={"100"} cy={"100"} r={"80"}></circle>
                        </svg>
                        <div className='Percentage'>75%</div>
                        <div className='text'>Problem Sloving</div>
                    </div>

                    <div className="radial-bar">
                        <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                            <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                            <circle className='path path-3'  cx={"100"} cy={"100"} r={"80"}></circle>
                        </svg>
                        <div className='Percentage'>85%</div>
                        <div className='text'>Team Work</div>
                    </div>
                </div>

              </div>

            </div>

          </section>

            {/* PORTFOLIO-SECTION */}

            <PortfolioSection/>

            {/* CONTACT-SECTION */}

          <section id="contact" className="contact">
          <div className="main-text">
              <span>ask me question </span>
              <h2>Contact Me</h2>
          </div>

          <ContactForm />
      </section>

            {/* FOOTER-SECTION */}

          <footer>
            <p>copyright &copy; 2024  by Fida Khan Developer <a href={`https://fidakhanprog.github.io/my-portfolio/`}>Visit</a> || All Right Reserved.</p>
            <a href="#home" title='link'><i className='bx bx-up-arrow-alt'></i></a>
          </footer>

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
