import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import reportWebVitals from "./reportWebVitals";

import PortfolioSection from "./sections/portfolio";
import ContactForm from "./sections/contact-form";
import Education from "./pages/Education";

import Typewriter from "typewriter-effect";
import "boxicons/css/boxicons.min.css";


// =====================================================
// MAIN APPLICATION
// =====================================================

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
    Current page/section is controlled by the normal
    browser hash.

    Examples:

    #home
    #about
    #services
    #skills
    #portfolio
    #contact
    #education
  */

  const [currentHash, setCurrentHash] = useState(
    window.location.hash
  );


  // =====================================================
  // HANDLE HASH CHANGE
  // =====================================================

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);


  // =====================================================
  // GET CURRENT SECTION
  // =====================================================

  const getCurrentSection = () => {
    const hash = window.location.hash;

    if (!hash) {
      return "home";
    }

    return hash.replace("#", "");
  };


  // =====================================================
  // MOBILE MENU
  // =====================================================

  const handleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  // =====================================================
  // GO TO SECTION
  // =====================================================

  const goToSection = (sectionId) => {
    closeMenu();

    /*
      Change browser URL.

      Example:

      #services
      #skills
      #contact
    */

    window.location.hash = sectionId;
  };


  // =====================================================
  // SCROLL TO CURRENT SECTION
  // =====================================================

  useEffect(() => {
    const section = getCurrentSection();

    /*
      Education is a separate page.
      Do not try to find it inside portfolio.
    */

    if (section === "education") {
      return;
    }


    /*
      Wait until React has rendered the page.
    */

    setTimeout(() => {
      const element =
        document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

  }, [currentHash]);


  // =====================================================
  // ACTIVE MENU + STICKY HEADER
  // =====================================================

  useEffect(() => {
    const header =
      document.querySelector("header");

    const sections =
      document.querySelectorAll(
        "main section[id]"
      );

    const links =
      document.querySelectorAll(
        "header .section-link"
      );


    if (!sections.length) {
      return;
    }


    const updateMenu = () => {
      let currentSection = "home";


      /*
        If user clicked a navigation item,
        use that hash as the active section.
      */

      const hash =
        window.location.hash.replace("#", "");


      /*
        Only use portfolio sections here.
      */

      const portfolioSections = [
        "home",
        "about",
        "services",
        "skills",
        "portfolio",
        "contact",
      ];


      if (
        portfolioSections.includes(hash)
      ) {
        currentSection = hash;
      } else {

        /*
          Detect section from scroll position.
        */

        const scrollPosition =
          window.scrollY + 250;


        sections.forEach((section) => {
          if (
            scrollPosition >=
            section.offsetTop
          ) {
            currentSection =
              section.id;
          }
        });

      }


      // =================================================
      // ACTIVE NAVIGATION
      // =================================================

      links.forEach((link) => {
        link.classList.remove("active");


        if (
          link.dataset.section ===
          currentSection
        ) {
          link.classList.add("active");
        }
      });


      // =================================================
      // STICKY HEADER
      // =================================================

      if (header) {

        if (window.scrollY > 50) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }

      }
    };


    updateMenu();


    window.addEventListener(
      "scroll",
      updateMenu,
      { passive: true }
    );


    window.addEventListener(
      "hashchange",
      updateMenu
    );


    return () => {
      window.removeEventListener(
        "scroll",
        updateMenu
      );

      window.removeEventListener(
        "hashchange",
        updateMenu
      );
    };

  }, [currentHash]);


  // =====================================================
  // EDUCATION PAGE
  // =====================================================

  /*
    If URL is:

    https://fidakhanprog.github.io/FK/#education

    show Education component.
  */

  if (
    currentHash === "#education" ||
    currentHash === "education"
  ) {
    return (
      <Education />
    );
  }


  // =====================================================
  // PORTFOLIO
  // =====================================================

  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header>

        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          className="logo"
          onClick={() =>
            goToSection("home")
          }
        >
          <span>Fida</span> Khan.
        </button>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <ul
          className={
            `navList ${
              isMenuOpen
                ? "open"
                : ""
            }`
          }
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
            <button
              type="button"
              className="section-link"
              data-section="education"
              onClick={() =>
                goToSection("education")
              }
            >
              Education
            </button>
          </li>

        </ul>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          id="menu-icon"
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          className={
            `bx ${
              isMenuOpen
                ? "bx-x"
                : "bx-menu"
            }`
          }
          onClick={handleMenu}
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


            {/* =================================================
                BUTTONS
            ================================================= */}

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


            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <div className="social-icons">

              {/* EMAIL */}

              <a
                href="mailto:engrfidabettani@gmail.com"
                title="Email"
              >
                <i className="bx bxs-envelope" />
              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/fida-khan-767110240/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="bx bxl-linkedin" />
              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/fidakhanProg"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="bx bxl-github" />
              </a>


              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/profile.php?id=100026060852750"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i className="bx bxl-facebook" />
              </a>


              {/* TIKTOK */}

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


          {/* =================================================
              HOME IMAGE
          ================================================= */}

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


            {/* RESPONSIVE WEB DESIGN */}

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


              <Skill
                name="Dot Net C#"
                percent="99%"
                className="html"
              />


              <Skill
                name="Microsoft SQL Server"
                percent="100%"
                className="css"
              />


              <Skill
                name="Python"
                percent="87%"
                className="bootstrap"
              />


              <Skill
                name="HTML/CSS/Bootstrap/Tailwind"
                percent="100%"
                className="tailwind"
              />


              <Skill
                name="JavaScript"
                percent="74%"
                className="javascript"
              />


              <Skill
                name="React.js"
                percent="99%"
                className="bootstrap"
              />


              <Skill
                name="Java"
                percent="85%"
                className="bootstrap"
              />


              <Skill
                name="Oracle / PL/SQL"
                percent="82%"
                className="bootstrap"
              />


              <Skill
                name="Node.js / Express.js"
                percent="70%"
                className="bootstrap"
              />


              <Skill
                name="AI / ML"
                percent="87%"
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
                  label="Creativity"
                  path="path-1"
                />


                <RadialSkill
                  percentage="65%"
                  label="Communication"
                  path="path-2"
                />

              </div>


              <div className="radial-bars">

                <RadialSkill
                  percentage="75%"
                  label="Problem Solving"
                  path="path-3"
                />


                <RadialSkill
                  percentage="85%"
                  label="Team Work"
                  path="path-3"
                />

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
// SKILL COMPONENT
// =====================================================

function Skill({
  name,
  percent,
  className,
}) {
  return (
    <div className="skill-bar">

      <div className="info">

        <p>
          {name}
        </p>

        <p>
          {percent}
        </p>

      </div>


      <div className="bar">

        <span
          className={className}
        />

      </div>

    </div>
  );
}


// =====================================================
// RADIAL SKILL COMPONENT
// =====================================================

function RadialSkill({
  percentage,
  label,
  path,
}) {
  return (
    <div className="radial-bar">

      <svg viewBox="0 0 200 200">

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
        {label}
      </div>

    </div>
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
    <App />
  </React.StrictMode>
);


reportWebVitals();
