import React from "react";

import HomeHero from "../../components/atoms/EventHero/EventHero";
import Carousel from "../../components/atoms/Carousel/Carousel";
import Button from "../../components/atoms/Button/Button";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Saturn6.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const Saturn6 = () => {

  let caroElements = [
    {
      src: "eliasson_009.jpg",
      alt: "olafur eliasson 009",
    },
    {
      src: "eliasson_005.jpg",
      alt: "olafur eliasson 005",
    },
    {
      src: "eliasson_006.jpg",
      alt: "olafur eliasson 006",
    },
    {
      src: "eliasson_007.jpg",
      alt: "olafur eliasson 007",
    },
    {
      src: "eliasson_010.jpg",
      alt: "olafur eliasson 010",
    },
    {
      src: "eliasson_011.jpg",
      alt: "olafur eliasson 011",
    },
  ];

  return (
    <div className="single saturn6">
      <HomeHero
        homeHeroImg={imgPath + "eliasson_001.jpg"}
        headline="Saturn 6"
        showFeedback={false}
      />

      <section className="copy-top">
        <h2>Saturn 6 becomes a spherical projection. </h2>
        <p>
          The spherical projection is achieved from inside the globe with a
          powerful wide angle projector and fisheye lens, producing images in a
          full 360 degree directional beam. Modulating frequencies audible in
          the installation respond to those in the space as sound is picked up
          and resonated back as feedback to the atmosphere.
        </p>
        <p>
          The spherical projection is achieved from inside the globe with a
          powerful wide angle projector and fisheye lens, producing images in a
          full 360 degree directional beam. Modulating frequencies audible in
          the installation respond to those in the space as sound is picked up
          and resonated back as feedback to the atmosphere.
        </p>
        <div className="ctas">
          <Button btnUrl="//space.neoneon.one/aMggN3t/striking-mature-soiree" btnTxt="enter saturn 6" targetBlank="true" />
          <Button btnUrl="feedback" btnTxt="feedback" />
        </div>
      </section>

      <section className="image-carousel">
        <div className="inner-carousel">
          <Carousel items={caroElements} />
        </div>
      </section>

      <nav className="related-nav">
        <ul>
          <li
            className="active-item"
          >
            our other experiences
          </li>
        </ul>
      </nav>
      <section className="related-content">
        <div className="related-grid">
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/neoneon_001.jpg"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
              <h3>neoneon</h3>
              <h5>Our first event. Feels like forever ago</h5>
              <a href="https://hubs.mozilla.com/f6HM9iE/neoneon">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
          <article className="one-related-item">
            <img
              className="home-hero-img"
              src="/assets/tropicalFreeze_066.png"
              alt="neonPlatform hero"
            />
            <div className="related-copy">
            <h3>Tropical Freeze</h3>
              <h5>Andrey, Kelly, Jen, Ray and Sam are all celebrating another trip around the sun. David and Liz are packing up soon for a new chapter in LA</h5>
              <a href="https://space.neoneon.one/VY3mMZa/tropical-freeze">
                <button className="transp-bg">Explore</button>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Saturn6;
