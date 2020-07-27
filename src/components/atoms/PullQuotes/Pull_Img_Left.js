import React from "react";
import './PullQuotes.scss'

const Pull_Img_Left = (props) => {
  const { pullImg, pullTitle, pullPara } = props;
  return (
    <section className="pull-quote quote-img-left">
      <img
        className="pull-left-img"
        src={pullImg}
        alt="neonPlatform hero"
      />
      <div className="pull-quote-copy">
        <h3>{pullTitle}</h3>
        <p>{pullPara}</p>
      </div>
    </section>
  );
};

export default Pull_Img_Left;
