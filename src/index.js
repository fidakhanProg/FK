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


function AppContainer() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // ================================
  // MOBILE MENU
  // ================================

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  // ================================
  // SCROLL TO SECTION
  // ================================

  const scrollToSection = (sectionId) => {

    closeMenu();

    const section = document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  };


  // ================================
  // ACTIVE MENU + STICKY HEADER
  // ================================

  useEffect(() => {

    const header = document.querySelector("header");

    const menuLinks = document.querySelectorAll(
      "header a[data-section]"
    );

    const sections = document.querySelectorAll(
      "section[data-section]"
    );


    const handleScroll = () => {

      // Sticky header
      if (header) {

        header.classList.toggle(
          "sticky",
          window.scrollY > 50
        );

      }


      // Find current section
      let currentSection = "home";

      sections.forEach((section) => {

        const sectionTop =
          section.getBoundingClientRect().top;

        if (sectionTop <= 150) {

          currentSection =
            section.getAttribute("data-section");

        }

      });


      // Remove active class
      menuLinks.forEach((link) => {

        link.classList.remove("active");

      });


      // Add active class
      const activeLink =
        document.querySelector(
          `header a[data-section="${currentSection}"]`
        );

      if (activeLink) {

        activeLink.classList.add("active");

      }

    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  // ================================
  // HOME PAGE
  // ================================

  return (
    <>

      {/* =====================================
          NAVBAR
      ====================================== */}

      <header>

        <a
          href="#"
          className="logo"
          onClick={(e) => {

            e.preventDefault();

            scrollToSection("home");

          }}
        >
          FidaKhan<span>.</span>
        </a>


           <ul className={`navList ${isMenuOpen ? 'open' : ''}`}>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><Link to="/education">Education</Link></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
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
        ></div>

      </header>


      {/* =====================================
          HOME
      ====================================== */}

      <section
        id="home"
        data-section="home"
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
            solutions, while my expertise in Microsoft
            SQL Server administration ensures efficient
            data management.
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


      {/* =====================================
          ABOUT
      ====================================== */}

      <section
        id="about"
        data-section="about"
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
            My technical expertise includes frontend
            technologies such as React.js, JavaScript,
            HTML5, CSS3, Bootstrap, and responsive
            web design.
          </p>


          <p>
            On the backend, I work with .NET, C#,
            Node.js, Express.js, Python, REST APIs,
            and server-side application development.
          </p>


          <p>
            I also have strong experience with SQL
            and database technologies, including
            Microsoft SQL Server, MySQL, PostgreSQL,
            MongoDB, and Oracle.
          </p>


          <p>
            I am also interested in Artificial
            Intelligence and Machine Learning,
            particularly in developing intelligent
            solutions using Python and deep learning
            technologies.
          </p>


          <p>
            As a Full-Stack Developer, I enjoy working
            across the complete development lifecycle
            from designing attractive and responsive
            user interfaces to developing secure
            backend systems, APIs, and efficient
            databases.
          </p>


          <p>
            I am continuously learning and exploring
            new technologies to improve my skills and
            build innovative software solutions.
          </p>

        </div>

      </section>


      {/* =====================================
          SERVICES
      ====================================== */}

      <section
        id="services"
        data-section="services"
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


          {/* RESPONSIVE WEB */}

          <div className="service-box">

            <i className="bx bx-desktop service-icon"></i>

            <h3>
              Responsive Web Design
            </h3>

            <p>
              Ensure your website looks great on all
              devices with mobile-first design. I
              create responsive websites using CSS,
              Bootstrap, Tailwind, and modern layout
              techniques.
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
              responsive and engaging web applications
              using React's component-based architecture.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          SKILLS
      ====================================== */}

      <section
        id="skills"
        data-section="skills"
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


          {/* TECHNICAL SKILLS */}

          <div className="skill-left">

            <h3>
              Technical Skills
            </h3>


            <Skill
              name="Dot Net C#"
              percentage="99%"
              className="html"
            />


            <Skill
              name="Microsoft SQL Server"
              percentage="100%"
              className="css"
            />


            <Skill
              name="Python"
              percentage="87%"
              className="bootstrap"
            />


            <Skill
              name="HTML / CSS / Bootstrap / Tailwind"
              percentage="100%"
              className="tailwind"
            />


            <Skill
              name="JavaScript"
              percentage="74%"
              className="javascript"
            />


            <Skill
              name="React.js"
              percentage="99%"
              className="bootstrap"
            />


            <Skill
              name="Java"
              percentage="85%"
              className="bootstrap"
            />


            <Skill
              name="Oracle / PL/SQL"
              percentage="82%"
              className="bootstrap"
            />


            <Skill
              name="Node.js / Express.js"
              percentage="70%"
              className="bootstrap"
            />


            <Skill
              name="AI / ML"
              percentage="87%"
              className="bootstrap"
            />

          </div>


          {/* PROFESSIONAL SKILLS */}

          <div className="skill-right">

            <h3>
              Professional Skills
            </h3>


            <div className="radial-bars">


              <RadialSkill
                percentage="90%"
                text="Creativity"
                path="path-1"
              />


              <RadialSkill
                percentage="65%"
                text="Communication"
                path="path-2"
              />

            </div>


            <div className="radial-bars">


              <RadialSkill
                percentage="75%"
                text="Problem Solving"
                path="path-3"
              />


              <RadialSkill
                percentage="85%"
                text="Team Work"
                path="path-3"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          PORTFOLIO
      ====================================== */}

      <section
        id="portfolio"
        data-section="portfolio"
      >

        <PortfolioSection />

      </section>


      {/* =====================================
          CONTACT
      ====================================== */}

      <section
        id="contact"
        data-section="contact"
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


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer>

        <p>
          Copyright &copy; 2024 by Fida Khan
          Developer || All Rights Reserved.
        </p>


        <a
          href="#"
          title="Go to Home"
          onClick={(e) => {

            e.preventDefault();

            scrollToSection("home");

          }}
        >

          <i className="bx bx-up-arrow-alt"></i>

        </a>

      </footer>

    </>
  );
}


// ==========================================
// SKILL COMPONENT
// ==========================================

function Skill({
  name,
  percentage,
  className
}) {

  return (

    <div className="skill-bar">

      <div className="info">

        <p>
          {name}
        </p>

        <p>
          {percentage}
        </p>

      </div>


      <div className="bar">

        <span className={className}></span>

      </div>

    </div>

  );
}


// ==========================================
// RADIAL SKILL COMPONENT
// ==========================================

function RadialSkill({
  percentage,
  text,
  path
}) {

  return (

    <div className="radial-bar">

      <svg
        viewBox="0 0 200 200"
      >

        <circle
          className="progress-bar"
          cx="100"
          cy="100"
          r="80"
        />


        <circle
          className={`path ${path}`}
          cx="100"
          cy="100"
          r="80"
        />

      </svg>


      <div className="Percentage">
        {percentage}
      </div>


      <div className="text">
        {text}
      </div>

    </div>

  );
}


// ==========================================
// REACT ROUTER
// ==========================================

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
