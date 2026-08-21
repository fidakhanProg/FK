import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import PortfolioSection from "./sections/portfolio";
import ContactForm from "./sections/contact-form";
import Education from "./pages/Education";

import Typewriter from "typewriter-effect";
import "boxicons/css/boxicons.min.css";

import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";


// =====================================================
// MAIN PORTFOLIO
// =====================================================

function AppContainer() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  // Stores the section that should be opened
  // after returning from another page.
  const pendingSection = useRef(null);


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
  // SCROLL TO SECTION
  // =====================================================

  const scrollToSection = (sectionId) => {

    const element =
      document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const header =
      document.querySelector("header");

    const headerHeight =
      header
        ? header.offsetHeight
        : 0;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    const offsetPosition =
      elementPosition - headerHeight - 20;


    window.scrollTo({
      top: Math.max(offsetPosition, 0),
      behavior: "smooth",
    });

  };


  // =====================================================
  // SECTION NAVIGATION
  // =====================================================

  const goToSection = (sectionId) => {

    closeMenu();


    // ---------------------------------------------------
    // If we are on Education page
    // ---------------------------------------------------

    if (location.pathname !== "/") {

      pendingSection.current =
        sectionId;

      navigate("/");

      return;
    }


    // ---------------------------------------------------
    // Already on portfolio page
    // ---------------------------------------------------

    scrollToSection(sectionId);

  };


  // =====================================================
  // SCROLL AFTER RETURNING FROM EDUCATION
  // =====================================================

  useEffect(() => {

    if (location.pathname !== "/") {
      return;
    }


    if (!pendingSection.current) {
      return;
    }


    const sectionId =
      pendingSection.current;


    pendingSection.current = null;


    // Give React time to render the portfolio.
    const timer = setTimeout(() => {

      scrollToSection(sectionId);

    }, 100);


    return () => {
      clearTimeout(timer);
    };

  }, [location.pathname]);


  // =====================================================
  // ACTIVE MENU + STICKY HEADER
  // =====================================================

  useEffect(() => {

    // Only run on portfolio page.
    if (location.pathname !== "/") {
      return;
    }


    const header =
      document.querySelector("header");


    const sections =
      document.querySelectorAll(
        "main section[id]"
      );


    const menuLinks =
      document.querySelectorAll(
        "header .section-link"
      );


    if (
      !sections.length ||
      !menuLinks.length
    ) {
      return;
    }


    const activeMenu = () => {

      let currentSection = "home";


      sections.forEach((section) => {

        const sectionTop =
          section.getBoundingClientRect().top;

        if (sectionTop <= 180) {

          currentSection =
            section.id;

        }

      });


      menuLinks.forEach((link) => {

        link.classList.remove(
          "active"
        );

        if (
          link.dataset.section ===
          currentSection
        ) {

          link.classList.add(
            "active"
          );

        }

      });

    };


    const handleScroll = () => {

      if (header) {

        header.classList.toggle(
          "sticky",
          window.scrollY > 50
        );

      }

      activeMenu();

    };


    // Initial state
    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [location.pathname]);


  // =====================================================
  // RETURN
  // =====================================================

  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header>

        {/* LOGO */}

        <div
          className="logo"
          onClick={() =>
            goToSection("home")
          }
          style={{
            cursor: "pointer",
          }}
        >
          <span>Fida</span>Khan.
        </div>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <ul
          className={`navList ${
            isMenuOpen ? "open" : ""
          }`}
        >

          {/* HOME */}

          <li>

            <button
              type="button"
              className="section-link"
              data-section="home"
              onClick={() =>
                goToSection("home")
              }
            >
              Home
            </button>

          </li>


          {/* ABOUT */}

          <li>

            <button
              type="button"
              className="section-link"
              data-section="about"
              onClick={() =>
                goToSection("about")
              }
            >
              About
            </button>

          </li>


          {/* SERVICES */}

          <li>

            <button
              type="button"
              className="section-link"
              data-section="services"
              onClick={() =>
                goToSection("services")
              }
            >
              Services
            </button>

          </li>


          {/* SKILLS */}

          <li>

            <button
              type="button"
              className="section-link"
              data-section="skills"
              onClick={() =>
                goToSection("skills")
              }
            >
              Skills
            </button>

          </li>


          {/* PORTFOLIO */}

          <li>

            <button
              type="button"
              className="section-link"
              data-section="portfolio"
              onClick={() =>
                goToSection("portfolio")
              }
            >
              Portfolio
            </button>

          </li>


          {/* CONTACT */}

          <li>

            <button
              type="button"
              className="section-link"
              data-section="contact"
              onClick={() =>
                goToSection("contact")
              }
            >
              Contact
            </button>

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


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          id="menu-icon"
          aria-label="Toggle menu"
          className={`bx ${
            isMenuOpen
              ? "bx-x"
              : "bx-menu"
          }`}
          onClick={handleClick}
        />

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
                      "SQL Developer",
                    ],
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


            {/* BUTTONS */}

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
                <i className="bx bxs-envelope" />
              </a>


              <a
                href="https://www.linkedin.com/in/fida-khan-767110240/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="bx bxl-linkedin" />
              </a>


              <a
                href="https://github.com/fidakhanProg"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="bx bxl-github" />
              </a>


              <a
                href="https://www.facebook.com/profile.php?id=100026060852750"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="bx bxl-facebook" />
              </a>


              <a
                href="https://www.tiktok.com/@thefkcircle"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
              >
                <i className="bx bxl-tiktok" />
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

            {/* DOT NET */}

            <div className="service-box">

              <i className="bx bxs-layer service-icon" />

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

              <i className="bx bx-desktop service-icon" />

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

              <i className="bx bx-code-alt service-icon" />

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

            {/* TECHNICAL SKILLS */}

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
                  <span className="html" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>Microsoft SQL Server</p>
                  <p>100%</p>
                </div>

                <div className="bar">
                  <span className="css" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>Python</p>
                  <p>87%</p>
                </div>

                <div className="bar">
                  <span className="bootstrap" />
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
                  <span className="tailwind" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>JavaScript</p>
                  <p>74%</p>
                </div>

                <div className="bar">
                  <span className="javascript" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>React.js</p>
                  <p>99%</p>
                </div>

                <div className="bar">
                  <span className="bootstrap" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>Java</p>
                  <p>85%</p>
                </div>

                <div className="bar">
                  <span className="bootstrap" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>Oracle / PL/SQL</p>
                  <p>82%</p>
                </div>

                <div className="bar">
                  <span className="bootstrap" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>Node.js / Express.js</p>
                  <p>70%</p>
                </div>

                <div className="bar">
                  <span className="bootstrap" />
                </div>

              </div>


              <div className="skill-bar">

                <div className="info">
                  <p>AI / ML</p>
                  <p>87%</p>
                </div>

                <div className="bar">
                  <span className="bootstrap" />
                </div>

              </div>

            </div>


            {/* PROFESSIONAL SKILLS */}

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
            Copyright © 2024 by Fida Khan
            Developer || All Rights Reserved.
          </p>


          <button
            type="button"
            title="Go to Home"
            onClick={() =>
              goToSection("home")
            }
          >

            <i className="bx bx-up-arrow-alt" />

          </button>

        </footer>

      </main>

    </>
  );
}


// =====================================================
// ROOT
// =====================================================

const root =
  ReactDOM.createRoot(
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
