import React from "react";  

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./ThankYou.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const ThankYou = () => {
  document.title = "Stereoh | About";

  return (
    <div className="single about">
      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "barclays.jpg"}
          alt="neonPlatform hero"
        />
        <div className="home-hero-content">
          <h1>Thank you</h1>
          <p className="home-hero-subheadline">
            You will receive an email with a link to to the party on the day of the event.
          </p>
        </div>
        <div className="gradient"></div>
      </section>

      <RelatedItems relThree="true" />
    </div>
  );
};

export default ThankYou;
