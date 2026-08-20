import React, { useRef } from "react";
import "./Education.css";

const Education = () => {
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

 

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToEducation = () => {
    educationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="education-page">

      {/* ================= HERO ================= */}
      <section className="education-hero">
        <div className="education-hero-content">

          <span className="section-subtitle">MY JOURNEY</span>

          <h1>
            Education <span>&</span> Experience
          </h1>

          <p>
            My academic background, professional experience, technical
            expertise, and software development journey.
          </p>

          <div className="education-hero-buttons">

            <button
              type="button"
              className="education-btn"
              onClick={scrollToExperience}
            >
              View Experience
            </button>

            <button
              type="button"
              className="education-btn outline-btn"
              onClick={scrollToEducation}
            >
              View Education
            </button>

          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section
        ref={experienceRef}
        id="experience"
        className="cv-section experience-section"
      >

        <div className="cv-section-title">
          <span>PROFESSIONAL JOURNEY</span>
          <h2>Work Experience</h2>
        </div>

        <div className="timeline">

          {/* CLEAN VOLT */}
          <div className="timeline-item">

            <div className="timeline-dot">
              <i className="bx bx-code-alt"></i>
            </div>

            <div className="timeline-card">

              <span className="timeline-date">
                03/2025 – Present
              </span>

              <h3>Software Engineer</h3>

              <h4>Clean Volt (PVT) LTD</h4>

              <p className="location">
                <i className="bx bx-map"></i>
                Islamabad, Pakistan
              </p>

              <ul>
                <li>
                  Developed and maintained responsive company websites
                  and web applications.
                </li>

                <li>
                  Designed and built ASP.NET (.NET Framework) business
                  portals for driver, employee, expense, income, and
                  management systems.
                </li>

                <li>
                  Designed, implemented, and managed Microsoft SQL Server
                  databases, including database architecture, optimization,
                  backups, and data integrity.
                </li>

                <li>
                  Led software development projects, coordinated
                  development activities, and ensured successful project
                  delivery.
                </li>

                <li>
                  Integrated front-end and back-end systems to improve
                  business operations and workflow automation.
                </li>
              </ul>

              <div className="tech-tags">
                <span>ASP.NET</span>
                <span>.NET Framework</span>
                <span>C#</span>
                <span>SQL Server</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>React.js</span>
                <span>Git</span>
                <span>REST APIs</span>
              </div>

            </div>
          </div>


          {/* BBA */}
          <div className="timeline-item">

            <div className="timeline-dot">
              <i className="bx bx-server"></i>
            </div>

            <div className="timeline-card">

              <span className="timeline-date">
                02/2025 – 02/2026
              </span>

              <h3>Software Engineer</h3>

              <h4>BBA</h4>

              <ul>
                <li>
                  Developed and maintained responsive websites using
                  HTML, CSS, JavaScript, Bootstrap, and React.js.
                </li>

                <li>
                  Built and maintained ASP.NET (.NET) web applications
                  and business portals.
                </li>

                <li>
                  Designed and managed Oracle and SQL Server databases,
                  including data modeling, queries, and performance
                  optimization.
                </li>

                <li>
                  Collaborated with the development team to implement
                  new features, troubleshoot issues, and improve
                  application performance.
                </li>

                <li>
                  Maintained and enhanced existing software systems to
                  ensure reliability and user satisfaction.
                </li>
              </ul>

              <div className="tech-tags">
                <span>ASP.NET</span>
                <span>C#</span>
                <span>Oracle</span>
                <span>SQL Server</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>React.js</span>
                <span>Visual Studio</span>
                <span>Oracle APEX</span>
                <span>SQL Developer</span>
                <span>Git</span>
                <span>Crystal Reports</span>
              </div>

            </div>
          </div>


          {/* MSCL */}
          <div className="timeline-item">

            <div className="timeline-dot">
              <i className="bx bx-desktop"></i>
            </div>

            <div className="timeline-card">

              <span className="timeline-date">
                07/2024 – 12/2024
              </span>

              <h3>Junior Software Engineer</h3>

              <h4>MSCL (Pvt) LTD</h4>

              <p className="location">
                <i className="bx bx-map"></i>
                Karachi, Pakistan
              </p>

              <ul>
                <li>
                  Developed and maintained desktop and web applications
                  using C# and ASP.NET (.NET Framework).
                </li>

                <li>
                  Built and enhanced banking portals and enterprise
                  business applications.
                </li>

                <li>
                  Designed and generated dynamic reports using
                  Crystal Reports.
                </li>

                <li>
                  Developed and maintained SQL Server database-driven
                  applications.
                </li>

                <li>
                  Collaborated with the development team to test,
                  debug, and deploy .NET solutions.
                </li>
              </ul>

              <div className="tech-tags">
                <span>C#</span>
                <span>ASP.NET</span>
                <span>.NET</span>
                <span>SQL Server</span>
                <span>Crystal Reports</span>
                <span>Visual Studio</span>
                <span>Git</span>
              </div>

            </div>
          </div>


          {/* PROCON */}
          <div className="timeline-item">

            <div className="timeline-dot">
              <i className="bx bx-data"></i>
            </div>

            <div className="timeline-card">

              <span className="timeline-date">
                02/2024 – 05/2024
              </span>

              <h3>Oracle Functional Intern</h3>

              <h4>Procon Engineering (Pvt) Ltd</h4>

              <p className="location">
                <i className="bx bx-map"></i>
                Karachi, Pakistan
              </p>

              <ul>
                <li>
                  Built and maintained forms, reports, and dashboards
                  using Oracle APEX.
                </li>

                <li>
                  Developed backend logic with PL/SQL procedures,
                  triggers, and functions.
                </li>

                <li>
                  Created and managed database objects including
                  tables and views in Oracle Database.
                </li>

                <li>
                  Designed Interactive Reports/Grids for MIS and
                  inventory management.
                </li>

                <li>
                  Assisted in data entry, CRUD operations, and
                  role-based access for internal modules.
                </li>
              </ul>

              <div className="tech-tags">
                <span>Oracle APEX</span>
                <span>PL/SQL</span>
                <span>Oracle Database</span>
                <span>SQL</span>
                <span>MIS</span>
              </div>

            </div>
          </div>


          {/* 360XPERT */}
          <div className="timeline-item">

            <div className="timeline-dot">
              <i className="bx bx-code-curly"></i>
            </div>

            <div className="timeline-card">

              <span className="timeline-date">
                06/2023 – 12/2023
              </span>

              <h3>Software Engineering Intern</h3>

              <h4>360Xpert Solutions (Pvt) Ltd</h4>

              <p className="location">
                <i className="bx bx-map"></i>
                Karachi, Pakistan
              </p>

              <ul>
                <li>
                  Assisted in creating responsive web interfaces using
                  HTML, CSS, JavaScript, and React.js.
                </li>

                <li>
                  Gained practical experience with APIs, databases,
                  and deployment processes.
                </li>
              </ul>

              <div className="tech-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>APIs</span>
                <span>Database</span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= EDUCATION ================= */}
      <section
        ref={educationRef}
        id="education"
        className="cv-section"
      >

        <div className="cv-section-title">
          <span>ACADEMIC BACKGROUND</span>
          <h2>Education</h2>
        </div>

        <div className="education-grid">

          {/* BE */}
          <div className="education-card featured-education">

            <div className="education-icon">
              <i className="bx bxs-graduation"></i>
            </div>

            <span className="education-date">
              2020 – 2024
            </span>

            <h3>
              Bachelor of Engineering
            </h3>

            <h4>
              BE Computer System Engineering
            </h4>

            <p className="institution">
              Dawood University of Engineering and Technology
            </p>

            <p className="location">
              <i className="bx bx-map"></i>
              Karachi, Pakistan
            </p>

            <div className="education-result">
              <strong>CGPA</strong>
              <span>3.4</span>
            </div>

          </div>


          {/* FSC */}
          <div className="education-card">

            <div className="education-icon">
              <i className="bx bxs-book"></i>
            </div>

            <span className="education-date">
              2018 – 2020
            </span>

            <h3>
              FSC Pre-Engineering
            </h3>

            <p className="institution">
              Islamia College Peshawar
            </p>

            <p className="location">
              <i className="bx bx-map"></i>
              Peshawar, Pakistan
            </p>

            <div className="education-result">
              <strong>Grade</strong>
              <span>80%</span>
            </div>

          </div>


          {/* MATRIC */}
          <div className="education-card">

            <div className="education-icon">
              <i className="bx bxs-school"></i>
            </div>

            <span className="education-date">
              2016 – 2018
            </span>

            <h3>
              Matriculation
            </h3>

            <p className="institution">
              BISE Bannu
            </p>

            <p className="location">
              <i className="bx bx-map"></i>
              Lakki Marwat, Pakistan
            </p>

            <div className="education-result">
              <strong>Grade</strong>
              <span>90%</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= TECHNICAL SKILLS ================= */}
      <section className="cv-section skills-section">

        <div className="cv-section-title">
          <span>TECHNICAL EXPERTISE</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <i className="bx bx-code-alt"></i>
            <h3>Programming Languages</h3>

            <div className="skill-tags">
              <span>C#</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
              <span>SQL</span>
              <span>PL/SQL</span>
            </div>
          </div>


          <div className="skill-card">
            <i className="bx bx-desktop"></i>
            <h3>Frontend Development</h3>

            <div className="skill-tags">
              <span>React.js</span>
              <span>Next.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
              <span>Responsive Design</span>
            </div>
          </div>


          <div className="skill-card">
            <i className="bx bx-server"></i>
            <h3>Backend Development</h3>

            <div className="skill-tags">
              <span>ASP.NET</span>
              <span>.NET Framework</span>
              <span>ASP.NET Web Forms</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>


          <div className="skill-card">
            <i className="bx bx-data"></i>
            <h3>Databases</h3>

            <div className="skill-tags">
              <span>SQL Server</span>
              <span>Oracle</span>
              <span>Oracle APEX</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>


          <div className="skill-card">
            <i className="bx bx-brain"></i>
            <h3>AI & Machine Learning</h3>

            <div className="skill-tags">
              <span>TensorFlow</span>
              <span>CNN</span>
              <span>OpenAI API</span>
              <span>AI Agents</span>
              <span>n8n</span>
              <span>Workflow Automation</span>
            </div>
          </div>


          <div className="skill-card">
            <i className="bx bx-cloud"></i>
            <h3>Cloud & Deployment</h3>

            <div className="skill-tags">
              <span>AWS</span>
              <span>Microsoft Azure</span>
              <span>Vercel</span>
              <span>Firebase</span>
              <span>GitHub Pages</span>
              <span>Docker</span>
            </div>
          </div>


          <div className="skill-card">
            <i className="bx bx-cog"></i>
            <h3>Core Concepts</h3>

            <div className="skill-tags">
              <span>OOP</span>
              <span>DSA</span>
              <span>SDLC</span>
              <span>Agile</span>
              <span>Database Design</span>
              <span>API Integration</span>
              <span>Authentication</span>
              <span>Authorization</span>
              <span>Performance Optimization</span>
            </div>
          </div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section className="cv-section projects-section">

        <div className="cv-section-title">
          <span>WHAT I HAVE BUILT</span>
          <h2>Key Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <i className="bx bx-heart"></i>
            <h3>Cardiovascular Disease Detection Using CNN</h3>
            <span>Python • TensorFlow • CNN</span>
            <p>
              Developed a deep learning model to detect cardiovascular
              disease using Convolutional Neural Networks (CNN).
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-car"></i>
            <h3>Clean Volt ERP & Driver Management Portal</h3>
            <span>ASP.NET • C# • SQL Server</span>
            <p>
              Developed a complete ERP and driver management system
              with modules for drivers, employees, expenses, income,
              salaries, and reporting.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-globe"></i>
            <h3>Clean Volt Company Website</h3>
            <span>
              React.js • HTML • CSS • JavaScript • Bootstrap • Next.js
            </span>
            <p>
              Designed and developed a responsive corporate website
              with service pages, contact forms, and an admin-friendly
              interface.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-group"></i>
            <h3>Teacher & Student Management System</h3>
            <span>ASP.NET • SQL Server</span>
            <p>
              Built a web-based portal for student records, fee
              management, attendance, and teacher administration.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-store"></i>
            <h3>Florist SaaS Platform</h3>
            <span>
              Next.js • React • TypeScript • Prisma • PostgreSQL
            </span>
            <p>
              Developed a production-grade enterprise SaaS application
              with responsive dashboards and multi-tenant architecture
              for the wedding industry.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-link-alt"></i>
            <h3>Creator & Brand Collaboration Platform</h3>
            <span>React • TypeScript • Node.js</span>
            <p>
              Built a marketplace platform connecting brands and
              creators with campaign management and API integrations.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-car"></i>
            <h3>AruDeal - Car Marketplace Platform</h3>
            <span>Next.js • React • TypeScript • Node.js</span>
            <p>
              Developed an automotive marketplace with listing,
              comparison, and optimized frontend/backend data
              integration.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-bot"></i>
            <h3>AI Automation & Workflow Systems</h3>
            <span>OpenAI API • n8n • Node.js • AWS</span>
            <p>
              Built AI-powered automation workflows for data processing,
              lead management, and backend task automation.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-calendar"></i>
            <h3>Vehicle Rental Management System</h3>
            <span>Oracle APEX • PL/SQL • Oracle Database</span>
            <p>
              Developed a vehicle rental portal for booking, customer
              management, fleet tracking, and payment records.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-package"></i>
            <h3>Inventory Management System</h3>
            <span>Oracle APEX • PL/SQL • Oracle Database</span>
            <p>
              Developed a web-based inventory management system with
              product tracking, stock management, and reporting
              dashboards.
            </p>
          </div>


          <div className="project-card">
            <i className="bx bx-line-chart"></i>
            <h3>Sales & Customer Management System (CRM)</h3>
            <span>Oracle APEX • PL/SQL • Oracle Database</span>
            <p>
              Built a CRM application to manage customers, sales
              records, invoices, and business reports.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CERTIFICATIONS ================= */}
      <section className="cv-section certifications-section">

        <div className="cv-section-title">
          <span>CONTINUOUS LEARNING</span>
          <h2>Courses & Certifications</h2>
        </div>

        <div className="certifications-grid">

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            Data Science
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            React.js Development
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            Data Analytics
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            SQL Server Database Management
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            AI Essentials
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            Machine Learning Fundamentals
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            Project Management Fundamentals
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            Agile Software Development
          </div>

          <div className="certification-item">
            <i className="bx bx-check-circle"></i>
            Oracle APEX Development
          </div>

        </div>
      </section>


      {/* ================= LANGUAGES ================= */}
      <section className="cv-section languages-section">

        <div className="cv-section-title">
          <span>COMMUNICATION</span>
          <h2>Languages</h2>
        </div>

        <div className="languages-grid">

          <div className="language-card">
            <i className="bx bx-message-rounded-dots"></i>
            <h3>English</h3>
            <p>Professional Working Proficiency</p>
          </div>

          <div className="language-card">
            <i className="bx bx-message-rounded-dots"></i>
            <h3>Urdu</h3>
            <p>Fluent</p>
          </div>

          <div className="language-card">
            <i className="bx bx-message-rounded-dots"></i>
            <h3>Pashto</h3>
            <p>Native / Fluent</p>
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="education-cta">

        <h2>Let's Build Something Great Together</h2>

        <p>
          Interested in working together or have a project in mind?
          Get in touch with me.
        </p>


      </section>

    </div>
  );
};

export default Education;