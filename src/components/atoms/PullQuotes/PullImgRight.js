import React from "react";
import './PullQuotes.scss'

const PullImgRight = (props) => {
  const { pullImg, pullTitle, pullPara } = props;
  return (
    <section className="pull-quote quote-img-right">
      <img
        className="pull-img"
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

export default PullImgRight;