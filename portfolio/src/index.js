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
          <span>P</span>ortfolio.
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
              <h1>Hi I'm Areeba Farhan</h1>
              <div className="change-text">
                <h3>And I'm </h3>
                <span className='auto-type'>
                    <Typewriter
                       options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: ["Frontend Developer", "React Frontend Developer", "UI & UX Designer"]

                       }}
                    />

                </span>
              </div>

              <p>I passionate front-end React developer. I specialize in creating visually appealing and user-friendly websites using HTML, CSS, Bootstrap, Tailwind, JavaScript, and React. I love bringing designs to life and ensuring they work flawlessly across all devices. My work focuses on clean, efficient code and engaging user experiences</p>


              <div className="btn-box">
                <a href={'Areeba Farhan CV.pdf'} download={'Areeba Farhan CV.pdf'} className="btn">Download CV</a>
                <a href="mailto:areebakhan1454771@gmail.com" className="btn">Hire Me Now!</a>
              </div>


              <div className="social-icons">
                <a href="mailto:areebakhan1454771@gmail.com"  title='email'><i class='bx bxs-envelope'></i></a>
                <a href="https://www.linkedin.com/in/areeba-farhan-4ba63925b/"  title='linkedin'><i className='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/Areeba-Farhan1234" title='github'><i className='bx bxl-github' ></i></a>
              </div>
            </div>

              <div className="home-image">
                    <div className="img-box">
                      <img src='img/Hero-Img.png' alt='Home' className="profile-img"/>
                    </div>
              </div>
          </section>

            {/* ABOUT-SECTION */}

          <section id="about" className="about">
     
                    <div className="img-box">
                      <img src='img/Hero-Img.png' alt='Home' className="profile-img"/>
                    </div>
     

            <div className="about-content">
              <h2>About Me</h2>
              <h3>A story of good</h3>
              <p>
              My name is Areeba Farhan, and I am a dedicated Computer Science student from Karachi University, specializing in front-end web development with React.js. My journey into the world of web development began with a fascination for how the web connects people and ideas across the globe. This curiosity quickly turned into a passion as I immersed myself in learning the intricacies of coding and design.

              From the early days of exploring HTML and CSS, I was captivated by the ability to bring ideas to life on the screen. The logical structure of code combined with the creativity of design felt like a perfect blend, and I knew I had found my calling. My academic journey, supplemented by three impactful internships, has allowed me to develop a strong foundation in front-end technologies. Each internship provided me with valuable hands-on experience, enabling me to contribute to real-world projects and hone my skills in creating user-friendly, responsive web applications.

              One of the defining moments in my development journey was earning the CS50X Computer Science certificate from Harvard University. This rigorous course deepened my understanding of the core principles that underpin modern software development. It also instilled in me a disciplined approach to problem-solving, which I now apply to every project I undertake. Alongside this, I have proudly earned certificates from <strong>Meta, Google, Alison, and Great Learning</strong>, each contributing to my ever-growing knowledge base.
              </p>

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
                <h3>Front-End Development</h3>
                <p>
                Build dynamic, interactive, or visually attractive sites that fit your specifications.
                I help create responsive, user-friendly websites using modern front-end technologies like React, HTML, CSS, Bootstrap, Tailwind, and JavaScript. My focus is on delivering high-performance web applications that are fast, efficient, and scalable to ensure an engaging experience for your users.
                </p>
              

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
                <h3>UI / UX Design</h3>
                <p>
                Design intuitive user interfaces that prioritize user experience and engagement.
                I place a strong emphasis on developing clean, user-friendly interfaces using modern UI/UX principles. I make sure that the websites and applications I develop are not only aesthetically pleasing but also easy to navigate and use, thereby giving maximum user satisfaction and retention.
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
                    <p>Html</p>
                    <p>99%</p>
                  </div>
                  <div className="bar">
                    <span className='html'></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>CSS</p>
                    <p>90%</p>
                  </div>
                  <div className="bar">
                    <span className='css'></span>
                  </div>
                </div>

                
                <div className="skill-bar">
                  <div className="info">
                    <p>Bootstrap</p>
                    <p>87%</p>
                  </div>
                  <div className="bar">
                    <span className='bootstrap'></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>Tailwind</p>
                    <p>55%</p>
                  </div>
                  <div className="bar">
                    <span className='tailwind'></span>
                  </div>
                </div>


                <div className="skill-bar">
                  <div className="info">
                    <p>JavaScript</p>
                    <p>64%</p>
                  </div>
                  <div className="bar">
                    <span className='javascript'></span>
                  </div>
                </div>

                
                <div className="skill-bar">
                  <div className="info">
                    <p>React JS</p>
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
            <p>copyright &copy; 2024  by Areeba Coder || All Right Reserved.</p>
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
