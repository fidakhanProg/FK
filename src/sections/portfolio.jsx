import React, { useState } from "react";
import PortfolioCard from "../components/portfolio-card";
import { portfolioData } from "../portfolio-data";

function PortfolioSection() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredData =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="main-text">
        <span>What I will do for you</span>
        <h2>Latest Projects</h2>
      </div>

      <div className="container">
        <div className="filter-buttons">
          <button
            className={`bttn ${filter === "all" ? "active-btn" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`bttn ${filter === "product" ? "active-btn" : ""}`}
            onClick={() => handleFilterChange("product")}
          >
            Product
          </button>
          <button
            className={`bttn ${filter === "interacting" ? "active-btn" : ""}`}
            onClick={() => handleFilterChange("interacting")}
          >
            Interacting
          </button>
          <button
            className={`bttn ${filter === "webApp" ? "active-btn" : ""}`}
            onClick={() => handleFilterChange("webApp")}
          >
            Web App
          </button>
        </div>
      </div>

      <div className="portfolio-gallery">
        {filteredData.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
