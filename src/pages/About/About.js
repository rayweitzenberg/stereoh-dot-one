import React from "react";
import { Link } from "react-router-dom";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./About.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Neoneon = () => {

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
          <h1>About</h1>
          <p className="home-hero-subheadline">
            Stereoh is a platform for live music shows and interactive
            experiences in a novel format that combines streaming video with
            freely traversable social 3D environments, where audience members
            can talk and interact naturally, and artists can meet their fans
            personally. We are constantly adding new functionality and plotting
            new experiences, so <Link to="/signup">keep in touch</Link> and drop by
            to check out the latest events.
          </p>
        </div>
        <div className="gradient"></div>
      </section>

      <RelatedItems relThree="true" />
    </div>
  );
};

export default Neoneon;
