import React from "react";

// import Button from "../../components/atoms/Button/Button";
import Countdown from "../../components/atoms/Countdown/Countdown";

import "./NYE.scss";


const eventInfo = {
  title: "Delano Smith presents <br />Detroit Beatdown",
  subHeadline: "Freaks Come Out",
  description:
    "Stereoh presents Halloween spooktacular edition with Detroit techno songstress Milan Ariel. As a singer, songwriter and performer she fuses hip-hop, techno and nu-soul to create modern pop music with unique Motor City sound. As a DJ Milan proudly carries her family heritage inspired by her father the originator of techno Juan Atkins. Join us and Milan this Friday night on a floating frozen oasis, complete with spooky avatars for you to try on, and eerie artifacts to discover.",
  btnUrl: "https://space.stereoh.one/SCRMjqL/tropical-fright",
  btnTxt: "enter detroit beatdown",
  //   btnTxt: "sign up",
  targetBlank: true,
  //   isDisabled: true,
};

const NYE = () => {
  document.title = "Stereoh | Detroit Beatdown";

  return (
    <div className="single nye">
      <article className="gradient-hero">
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/assets/events-beatdown-no-copy.mp4"
          class="video-bg"
        />,
      `,
          }}
        ></div>
      </article>
      <div className="event-info">
        <h1>
          Delano Smith presents <br />
          Detroit Beatdown
        </h1>
        <h2 className="disclaimer">{eventInfo.coming}</h2>
        <ul className="artists">
          <li>Delano Smith</li>
          <li>Norm Talley</li>
          <li>Mike "Agent X" Clark</li>
          <li>Rick Wilhite</li>
          <li>
            Special Guest Fred P<span className="mobileOnly"></span>
          </li>
        </ul>
        <div className="event-body">
          <p>{eventInfo.description}</p>
        </div>
        <div className="cta-container">
          {/* <Button
            // buttonUse="enter-space"
            btnUrl={eventInfo.btnUrl}
            btnTxt={eventInfo.btnTxt}
            targetBlank={eventInfo.targetBlank}
            disabled={eventInfo.isDisabled}
          /> */}
          <Countdown />
        </div>
      </div>
      {/* <Countdown /> */}
      {/* <RelatedItems /> */}
    </div>
  );
};

export default NYE;
