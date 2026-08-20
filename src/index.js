import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";
import "boxicons/css/boxicons.min.css";

import Typewriter from "typewriter-effect";
import PortfolioSection from "./sections/portfolio";
import ContactForm from "./sections/contact-form";
import Education from "./pages/Education";

import reportWebVitals from "./reportWebVitals";


const AppContainer = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mobile menu
  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {

    const menuLi = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");

    // Active menu on scroll
    const activeMenu = () => {

      if (!sections.length || !menuLi.length) {
        return;
      }

      let len = sections.length - 1;

      while (
        len > 0 &&
        window.scrollY + 97 < sections[len].offsetTop
      ) {
        len--;
      }

      menuLi.forEach((item) => {
        item.classList.remove("active");
      });

      if (menuLi[len]) {
        menuLi[len].classList.add("active");
      }
    };


    // Sticky header
    const handleScroll = () => {

      if (header) {
        header.classList.toggle(
          "sticky",
          window.scrollY > 50
        );
      }

      // Close menu when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };


    activeMenu();

    window.addEventListener("scroll", activeMenu);
    window.addEventListener("scroll", handleScroll);


    return () => {

      window.removeEventListener("scroll", activeMenu);
      window.removeEventListener("scroll", handleScroll);

    };

  }, [isMenuOpen]);


  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header>

        <a href="#home" className="logo">
          FidaKhan<span>.</span>
        </a>


        <ul className={`navList ${isMenuOpen ? "open" : ""}`}>

          <li>
            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>


          <li>
            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
          </li>


          <li>
            <a
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>


          <li>
            <a
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>


          <li>
            <a
              href="#portfolio"
              onClick={closeMenu}
            >
              Portfolio
            </a>
          </li>


          <li>
            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>


          {/* Education is a separate page */}

          <li>
            <Link
              to="/education"
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>

        </ul>


        {/* Mobile menu icon */}

        <div
          id="menu-icon"
          className={`bx ${
            isMenuOpen ? "bx-x" : "bx-menu"
          }`}
          onClick={handleClick}
        ></div>

      </header>


      {/* ================= HOME ================= */}

      <section id="home" className="home">

        <div className="home-content">

          <h1>Hi I'm Fida Khan</h1>


          <div className="change-text">

            <h3>And I'm </h3>

            <span className="auto-type">

              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,

                  strings: [
                    "Software Engineer",
                    ".Net Developer",
                    "Frontend Developer",
                    "Python Developer",
                    "AI Developer",
                    "SQL Developer"
                  ]
                }}
              />

            </span>

          </div>


          <p>
            I am a passionate .NET Developer and Frontend Specialist
            with a knack for creating visually appealing and
            user-friendly applications using HTML, CSS, Bootstrap,
            Tailwind, JavaScript, and React. My skills as a Socket
            Programmer enable real-time communication solutions,
            while my expertise in Microsoft SQL Server administration
            ensures efficient data management. I focus on clean code
            and engaging user experiences to deliver high-quality
            results.
          </p>


          <div className="btn-box">

            <a
              href={`${process.env.PUBLIC_URL}/Fidai.pdf`}
              download="Fida Khan CV.pdf"
              className="btn"
            >
              Download CV
            </a>


            <a
              href="mailto:engrfidabettani@gmail.com"
              className="btn"
            >
              Hire Me Now!
            </a>

          </div>


          <div className="social-icons">

            <a
              href="mailto:engrfidabettani@gmail.com"
              title="Email"
            >
              <i className="bx bx-envelope"></i>
            </a>

            <a
              href="https://github.com/fidakhanProg"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>

          </div>

        </div>


        <div className="home-image">

          <div className="img-box">

            <img
              src={`${process.env.PUBLIC_URL}/img/4.png`}
              alt="Fida Khan"
              className="profile-img"
            />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="about">

        <div className="img-box">

          <img
            src={`${process.env.PUBLIC_URL}/img/4.png`}
            alt="Fida Khan"
            className="profile-img"
          />

        </div>


        <div className="about-content">

          <h2>About Me</h2>

          <h3>A story of good</h3>


          <p>
            My technical expertise includes frontend technologies
            such as React.js, JavaScript, HTML5, CSS3, Bootstrap,
            and responsive web design.
          </p>


          <p>
            On the backend, I work with .NET, C#, Node.js,
            Express.js, Python, REST APIs, and server-side
            application development.
          </p>


          <p>
            I also have strong experience with SQL and database
            technologies, including Microsoft SQL Server, MySQL,
            PostgreSQL, MongoDB, and Oracle.
          </p>


          <p>
            I am also interested in Artificial Intelligence and
            Machine Learning, particularly in developing intelligent
            solutions using Python and deep learning technologies.
          </p>


          <p>
            As a Full-Stack Developer, I enjoy working across the
            complete development lifecycle—from designing attractive
            and responsive user interfaces to developing secure
            backend systems, APIs, and efficient databases.
          </p>


          <p>
            I am continuously learning and exploring new technologies
            to improve my skills and build innovative software
            solutions.
          </p>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="services"
      >

        <div className="main-text">

          <span>What I will do for you</span>

          <h2>Our Services</h2>

        </div>


        <div className="section_services">


          {/* .NET */}

          <div className="service-box">

            <i className="bx bxs-layer service-icon"></i>

            <h3>Dot Net</h3>

            <p>
              Leverage the power of .NET to build robust,
              scalable applications tailored to your business
              needs. I specialize in creating high-performance
              web and desktop applications with Microsoft SQL
              Server integration.
            </p>

          </div>


          {/* Responsive Web */}

          <div className="service-box">

            <i className="bx bx-desktop service-icon"></i>

            <h3>Responsive Web Design</h3>

            <p>
              Ensure your website looks great on all devices
              with mobile-first design. I create responsive
              websites using CSS, Bootstrap, Tailwind, and
              modern layout techniques.
            </p>

          </div>


          {/* React */}

          <div className="service-box">

            <i className="bx bx-code-alt service-icon"></i>

            <h3>React JS</h3>

            <p>
              Unlock the potential of your web applications
              with React.js. I create responsive and engaging
              web applications using React's component-based
              architecture.
            </p>

          </div>


        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="skills"
      >

        <div className="main-text">

          <span>Technical and Professional</span>

          <h2>My Skills</h2>

        </div>


        <div className="skill-main">


          {/* Technical Skills */}

          <div className="skill-left">

            <h3>Technical Skills</h3>


            <div className="skill-bar">

              <div className="info">

                <p>Dot Net C#</p>

                <p>99%</p>

              </div>

              <div className="bar">

                <span className="html"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>Microsoft SQL Server</p>

                <p>100%</p>

              </div>

              <div className="bar">

                <span className="css"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>Python</p>

                <p>87%</p>

              </div>

              <div className="bar">

                <span className="bootstrap"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>HTML / CSS / Bootstrap / Tailwind</p>

                <p>100%</p>

              </div>

              <div className="bar">

                <span className="tailwind"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>JavaScript</p>

                <p>74%</p>

              </div>

              <div className="bar">

                <span className="javascript"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>React.js</p>

                <p>99%</p>

              </div>

              <div className="bar">

                <span className="bootstrap"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>Java</p>

                <p>85%</p>

              </div>

              <div className="bar">

                <span className="bootstrap"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>Oracle / PL/SQL</p>

                <p>82%</p>

              </div>

              <div className="bar">

                <span className="bootstrap"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>Node.js / Express.js</p>

                <p>70%</p>

              </div>

              <div className="bar">

                <span className="bootstrap"></span>

              </div>

            </div>


            <div className="skill-bar">

              <div className="info">

                <p>AI / ML</p>

                <p>87%</p>

              </div>

              <div className="bar">

                <span className="bootstrap"></span>

              </div>

            </div>

          </div>


          {/* Professional Skills */}

          <div className="skill-right">

            <h3>Professional Skills</h3>


            <div className="radial-bars">


              <div className="radial-bar">

                <svg viewBox="0 0 200 200">

                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                  <circle
                    className="path path-1"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                </svg>

                <div className="Percentage">
                  90%
                </div>

                <div className="text">
                  Creativity
                </div>

              </div>


              <div className="radial-bar">

                <svg viewBox="0 0 200 200">

                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                  <circle
                    className="path path-2"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                </svg>

                <div className="Percentage">
                  65%
                </div>

                <div className="text">
                  Communication
                </div>

              </div>

            </div>


            <div className="radial-bars">


              <div className="radial-bar">

                <svg viewBox="0 0 200 200">

                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                  <circle
                    className="path path-3"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                </svg>

                <div className="Percentage">
                  75%
                </div>

                <div className="text">
                  Problem Solving
                </div>

              </div>


              <div className="radial-bar">

                <svg viewBox="0 0 200 200">

                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                  <circle
                    className="path path-3"
                    cx="100"
                    cy="100"
                    r="80"
                  />

                </svg>

                <div className="Percentage">
                  85%
                </div>

                <div className="text">
                  Team Work
                </div>

              </div>


            </div>

          </div>

        </div>

      </section>


      {/* ================= PORTFOLIO ================= */}

      <section id="portfolio">

        <PortfolioSection />

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact"
      >

        <div className="main-text">

          <span>Ask me a question</span>

          <h2>Contact Me</h2>

        </div>


        <ContactForm />

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          Copyright &copy; 2024 by Fida Khan Developer
          {" || "}
          All Rights Reserved.
        </p>


        <a
          href="#home"
          title="Go to Home"
        >
          <i className="bx bx-up-arrow-alt"></i>
        </a>

      </footer>

    </>
  );
};


/* =====================================================
   REACT ROUTER
===================================================== */

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(

  <React.StrictMode>

    <HashRouter>

      <Routes>

        {/* HOME / MAIN PORTFOLIO */}

        <Route
          path="/"
          element={<AppContainer />}
        />


        {/* EDUCATION PAGE */}

        <Route
          path="/education"
          element={<Education />}
        />


      </Routes>

    </HashRouter>

  </React.StrictMode>

);


reportWebVitals();
