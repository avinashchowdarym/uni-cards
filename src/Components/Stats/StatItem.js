import "../../styles/index.scss";
import { useState } from "react";
import { MobileView } from "react-device-detect";

const StatItem = (props) => {
  const imgStyle = props.horizontalReverse
    ? { marginRight: "170px" }
    : { marginLeft: "170px" };
  const imgmobileStyle = { marginRight: "undefined" };
  return (
    <div className={props.horizontalReverse ? "stat-item-ro" : "stat-item"}>
      <div className="text-part">
        <span className="black-text">{props.blackText}</span>
        <span className="gray-text">{props.grayedText}</span>
        <div className="condition">{props.condition}</div>
      </div>
      <div className="img-part">
        <img
          src={props.imageURl}
          alt=""
          className={props.horizontalReverse ? "imgright" : "imgleft"}
        />
      </div>
    </div>
  );
};

export default StatItem;
