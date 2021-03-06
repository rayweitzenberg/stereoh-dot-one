import React from "react";
import { Link } from "react-router-dom";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./Experiences.scss";

const imgPath = process.env.PUBLIC_URL + "/assets/";

const experiences = () => {
  document.title = "Stereoh | Events";

  return (
    <div className="all-events">
      <section className="all-events-main">
        <div className="events-info-content">
          <h1>Stereoh Experiences</h1>
          <p className="events-info-subheadline">
            Stereoh is a platform for live music shows and interactive
            experiences in a novel format that combines streaming video with
            freely traversable social 3D environments, where audience members
            can talk and interact naturally, and artists can meet their fans
            personally. We are constantly adding new functionality and plotting
            new experiences, so <Link to="/signup">keep in touch</Link> and drop
            by to check out the latest events.
          </p>
        </div>
        {/* <div className="gradient"></div> */}

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS - 16x9 -->
        // TWO ACROSS - 16x9 -->
        // ———————————————————————————————————— TWO ACROSS - 16x9 —> */}
        <div className="events-tiles two-across sixteen-nine">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugura
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS - LESS CONTENT -->
        // TWO ACROSS - LESS CONTENT -->
        // ———————————————————————————————————— TWO ACROSS - LESS CONTENT —> */}
        <div className="events-tiles two-across two-shorter-text">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "tropicalFright_008.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "sat6/satSixSideRoom_017.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "sat6/satSixSideRoom_017.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "tropicalFright_008.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o TWO ACROSS -->
        // TWO ACROSS -->
        // ———————————————————————————————————— TWO ACROSS —> */}
        <div className="events-tiles two-across">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "tropicalFright_008.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "sat6/satSixSideRoom_017.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "sat6/satSixSideRoom_017.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src={imgPath + "tropicalFright_008.jpg"}
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o SINGLE COLUMN WIDE -->
        // SINGLE COLUMN WIDE -->
        // ———————————————————————————————————— SINGLE COLUMN WIDE —> */}
        <div className="events-tiles single-column">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o SINGLE COLUMN 50x50 -->
        // SINGLE COLUMN 50x50 -->
        // ———————————————————————————————————— SINGLE COLUMN 50x50 —> */}
        <div className="events-tiles single-fifty">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFreeze_014.png"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSix_021.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o SINGLE SQUARES -->
        // SINGLE SQUARES -->
        // ———————————————————————————————————— SINGLE SQUARES —> */}
        <div className="events-tiles single-square">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFright_008.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia, lobortis
                ante vel. Proin eu arcu lacinia, lobortis ante vel. Proin eu
                arcu lacinia, lobortis.
              </p>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/sat6/satSixSideRoom_017.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>
                Stereoh is welcoming New Yorkers Heidi Sabertooth and R.Gamble
                of Lost Soul Enterprises to the inaugural Saturn6 party.
              </p>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/tropicalFright_008.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia, lobortis
                ante vel. Proin eu arcu lacinia, lobortis ante vel. Proin eu
                arcu lacinia, lobortis.
              </p>
              <p>
                Stereoh presents Halloween spooktacular edition with Detroit
                techno songstress Milan Ariel. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin eu arcu lacinia.
              </p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>

        {/* // ————————————————————————————————————o————————————————————————————————————o VERT TILES -->
        // VERT TILES -->
        // ———————————————————————————————————— VERT TILES —> */}
        <div className="events-tiles event-tiles-vert">
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Tropical Fright</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
          <article className="one-event-tile">
            <img
              className="one-event-img"
              src="/assets/eventTileVert.jpg"
              alt="neonPlatform hero"
            />
            <div className="one-tile-copy">
              <h2>Saturn 6</h2>
              <p>Stereoh welcome New Yorkers Heidi Sabertooth and R.Gamble</p>
              <Link to="/bassline-basin">
                <button className="transp-bg">Explore</button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <RelatedItems relThree="true" />
    </div>
  );
};

export default experiences;
