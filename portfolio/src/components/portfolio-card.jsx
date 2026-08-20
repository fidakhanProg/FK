import React from "react";

function PortfolioCard({ item }) {
  return (
    <div className="port-box">
      <div className="port-image">
        <img src={item?.img} alt={`img${item?.id}`} />
      </div>

      <div className="port-content">
        <h3>{item?.title}</h3>
        <a
          href={item?.link}
          target="_blank"
          rel="noopener noreferrer"
          title="link"
        >
          <i className="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
