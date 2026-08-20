import React from "react";

function PortfolioCard({ item }) {
  return (
    <div className="port-box">
      <div className="port-card">

        {/* FRONT SIDE */}
        <div className="port-front">
          <div className="port-image">
            <img
              src={item?.img}
              alt={item?.title}
            />
          </div>

          <div className="port-front-title">
            <h3>{item?.title}</h3>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="port-back">
          <div className="port-back-content">

            <h3>{item?.title}</h3>

            <p>
              {item?.description ||
                "This project was developed as part of my software development portfolio."}
            </p>

            <div className="port-technologies">
              {item?.technologies || "React.js • JavaScript • CSS"}
            </div>

            {item?.link && (
              <div className="port-content">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Project"
                >
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default PortfolioCard;