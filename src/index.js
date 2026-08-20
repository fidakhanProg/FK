
import Education from "./pages/Education"
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import PortfolioSection from './sections/portfolio';
import Typewriter from 'typewriter-effect';
import ContactForm from "./sections/contact-form";
import 'boxicons/css/boxicons.min.css';



import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";












// =====================================================
// MAIN PORTFOLIO
// =====================================================

const AppContainer = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();


  // =====================================================
  // MOBILE MENU
  // =====================================================

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  // =====================================================
  // WHEN EDUCATION PAGE IS OPEN
  // =====================================================

  useEffect(() => {

    // If we are on education page, don't run
    // portfolio scroll functions.
    if (location.pathname !== "/") {
      return;
    }

    const header = document.querySelector("header");


    // =================================================
    // ACTIVE MENU
    // =================================================

    const activeMenu = () => {

      const sections = document.querySelectorAll(
        "main section"
      );

      const menuLinks = document.querySelectorAll(
        "header .navList a.section-link"
      );


      if (!sections.length || !menuLinks.length) {
        return;
      }


      let currentSection = 0;


      sections.forEach((section, index) => {

        const sectionTop =
          section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          currentSection = index;
        }

      });


      menuLinks.forEach((link) => {
        link.classList.remove("active");
      });


      if (menuLinks[currentSection]) {
        menuLinks[currentSection].classList.add(
          "active"
        );
      }

    };


    // =================================================
    // STICKY HEADER
    // =================================================

    const handleScroll = () => {

      if (header) {

        header.classList.toggle(
          "sticky",
          window.scrollY > 50
        );

      }

    };


    activeMenu();
    handleScroll();


    window.addEventListener(
      "scroll",
      activeMenu
    );

    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        activeMenu
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [location.pathname]);


  // =====================================================
  // SECTION NAVIGATION
  // =====================================================

  const goToSection = (sectionId) => {

    closeMenu();


    // If we are already on home
    if (location.pathname === "/") {

      setTimeout(() => {

        const element =
          document.getElementById(sectionId);

        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }, 50);

    }

  };


  // =====================================================
  // MAIN PAGE
  // =====================================================

  return (
    <>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header>

        <div className="logo">
          <span>Fida</span>Khan.
        </div>


        <ul
          className={`navList ${
            isMenuOpen ? "open" : ""
          }`}
        >

          {/* HOME */}

          <li>
            <a
              href="#home"
              className="section-link"
              onClick={(e) => {
                e.preventDefault();
                goToSection("home");
              }}
            >
              Home
            </a>
          </li>


          {/* ABOUT */}

          <li>
            <a
              href="#about"
              className="section-link"
              onClick={(e) => {
                e.preventDefault();
                goToSection("about");
              }}
            >
              About
            </a>
          </li>


          {/* SERVICES */}

          <li>
            <a
              href="#services"
              className="section-link"
              onClick={(e) => {
                e.preventDefault();
                goToSection("services");
              }}
            >
              Services
            </a>
          </li>


          {/* SKILLS */}

          <li>
            <a
              href="#skills"
              className="section-link"
              onClick={(e) => {
                e.preventDefault();
                goToSection("skills");
              }}
            >
              Skills
            </a>
          </li>


          {/* PORTFOLIO */}

          <li>
            <a
              href="#portfolio"
              className="section-link"
              onClick={(e) => {
                e.preventDefault();
                goToSection("portfolio");
              }}
            >
              Portfolio
            </a>
          </li>


          {/* CONTACT */}

          <li>
            <a
              href="#contact"
              className="section-link"
              onClick={(e) => {
                e.preventDefault();
                goToSection("contact");
              }}
            >
              Contact
            </a>
          </li>


          {/* EDUCATION */}

          <li>
            <Link
              to="/education"
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>

        </ul>


        {/* MOBILE MENU BUTTON */}

        <div
          id="menu-icon"
          className={`bx ${
            isMenuOpen
              ? "bx-x"
              : "bx-menu"
          }`}
          onClick={handleClick}
        >
        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main>


        {/* =================================================
            HOME
        ================================================= */}

        <section
          id="home"
          className="home"
        >

          <div className="home-content">

            <h1>
              Hi I'm Fida Khan
            </h1>


            <div className="change-text">

              <h3>
                And I'm
              </h3>


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
              I am a passionate .NET Developer and
              Frontend Specialist with a knack for
              creating visually appealing and
              user-friendly applications using HTML,
              CSS, Bootstrap, Tailwind, JavaScript,
              and React. My skills as a Socket
              Programmer enable real-time communication
              solutions, while my expertise in
              Microsoft SQL Server administration
              ensures efficient data management.
              I focus on clean code and engaging
              user experiences to deliver
              high-quality results.
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


            {/* SOCIAL ICONS */}

            <div className="social-icons">

              <a
                href="mailto:engrfidabettani@gmail.com"
                title="Email"
              >
                <i className="bx bxs-envelope"></i>
              </a>


              <a
                href="https://www.linkedin.com/in/fida-khan-767110240/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
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
                href="https://www.facebook.com/profile.php?id=100026060852750"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>


              <a
                href="https://www.tiktok.com/@thefkcircle"
                target="_blank"
                rel="noreferrer"
                title="TikTok"
              >
                <i className="bx bxl-tiktok"></i>
              </a>

            </div>

          </div>


          {/* HOME IMAGE */}

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



        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="about"
        >

          <div className="img-box">

            <img
              src={`${process.env.PUBLIC_URL}/img/4.png`}
              alt="Fida Khan"
              className="profile-img"
            />

          </div>


          <div className="about-content">

            <h2>
              About Me
            </h2>


            <h3>
              A story of good
            </h3>


            <p>

              My name is Fida Khan, and I am a
              passionate Software Engineer and
              Full-Stack Developer focused on
              building modern, scalable, and
              user-friendly web applications.

              <br />
              <br />

              My technical expertise includes
              frontend technologies such as React.js,
              JavaScript, HTML5, CSS3, Bootstrap,
              and responsive web design.

              <br />
              <br />

              On the backend, I work with .NET,
              C#, Node.js, Express.js, Python,
              REST APIs, and server-side application
              development.

              <br />
              <br />

              I also have strong experience with
              SQL and database technologies,
              including Microsoft SQL Server,
              MySQL, PostgreSQL, MongoDB, and Oracle.

              <br />
              <br />

              I am also interested in Artificial
              Intelligence and Machine Learning,
              particularly in developing intelligent
              solutions using Python and deep
              learning technologies.

              <br />
              <br />

              As a Full-Stack Developer, I enjoy
              working across the complete development
              lifecycle—from designing attractive
              and responsive user interfaces to
              developing secure backend systems,
              APIs, and efficient databases.

              <br />
              <br />

              My goal is to combine software
              engineering, web development, AI,
              and modern technologies to create
              reliable applications that deliver
              real value.

            </p>

          </div>

        </section>



        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          id="services"
          className="services"
        >

          <div className="main-text">

            <span>
              What I will do for you
            </span>

            <h2>
              Our Services
            </h2>

          </div>


          <div className="section_services">


            {/* .NET */}

            <div className="service-box">

              <i className="bx bxs-layer service-icon"></i>

              <h3>
                Dot Net
              </h3>

              <p>
                Leverage the power of .NET to build
                robust, scalable applications tailored
                to your business needs. I specialize
                in creating high-performance web and
                desktop applications with Microsoft
                SQL Server integration.
              </p>

            </div>


            {/* WEB DESIGN */}

            <div className="service-box">

              <i className="bx bx-desktop service-icon"></i>

              <h3>
                Responsive Web Design
              </h3>

              <p>
                Ensure your website looks great on
                all devices with mobile-first design.
                I create responsive websites using
                CSS, Bootstrap, Tailwind, and modern
                layout techniques.
              </p>

            </div>


            {/* REACT */}

            <div className="service-box">

              <i className="bx bx-code-alt service-icon"></i>

              <h3>
                React JS
              </h3>

              <p>
                Unlock the potential of your web
                applications with React.js. I create
                responsive and engaging web
                applications using React's
                component-based architecture.
              </p>

            </div>

          </div>

        </section>



        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="skills"
        >

          <div className="main-text">

            <span>
              Technical and Professional
            </span>

            <h2>
              My Skills
            </h2>

          </div>


          <div className="skill-main">


            {/* TECHNICAL */}

            <div className="skill-left">

              <h3>
                Technical Skills
              </h3>


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
                  <p>
                    HTML/CSS/Bootstrap/Tailwind
                  </p>

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


            {/* PROFESSIONAL */}

            <div className="skill-right">

              <h3>
                Professional Skills
              </h3>


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



        {/* =================================================
            PORTFOLIO
        ================================================= */}

        <section
          id="portfolio"
          className="portfolio"
        >

          <PortfolioSection />

        </section>



        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="contact"
        >

          <div className="main-text">

            <span>
              Ask me a question
            </span>

            <h2>
              Contact Me
            </h2>

          </div>


          <ContactForm />

        </section>



        {/* =================================================
            FOOTER
        ================================================= */}

        <footer>

          <p>
            Copyright &copy; 2024 by Fida Khan
            Developer || All Rights Reserved.
          </p>


          <a
            href="#home"
            title="Go to Home"
            onClick={(e) => {
              e.preventDefault();
              goToSection("home");
            }}
          >
            <i className="bx bx-up-arrow-alt"></i>
          </a>

        </footer>

      </main>

    </>
  );
};



// =====================================================
// ROOT
// =====================================================

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(

  <React.StrictMode>

    <HashRouter>

      <Routes>

        {/* MAIN PORTFOLIO */}

        <Route
          path="/"
          element={<AppContainer />}
        />


        {/* EDUCATION */}

        <Route
          path="/education"
          element={<Education />}
        />

      </Routes>

    </HashRouter>

  </React.StrictMode>

);


reportWebVitals();
