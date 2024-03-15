import "../../styles/index.scss";
import Maintext from "./Maintext";
import StatItem from "./StatItem";
import Downarrow from "../../icons/Downarrow";
import oneperc from "../../one_percent_cashback.png";
import fivex from "../../five_x_rewards.png";
import forex from "../../forex_globe.png";

const Stats = () => {
  const blackTexts = [
    "1% assured cashback on your spends.",
    "5x more value than your cashback,",
    "Zero Forex Markup.",
  ];
  const grayedTexts = [
    " The more you spend, the more you earn.",
    " only at the Uni Store.",
    " Go international, without any fees.",
  ];
  const conditions = [
    "Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.",
    "",
    "",
  ];

  const sources = [oneperc, fivex, forex];

  const renderStatArray = [];

  for (let i = 0; i < 3; i++) {
    renderStatArray.push(
      <StatItem
        blackText={blackTexts[i]}
        grayedText={grayedTexts[i]}
        condition={conditions[i]}
        horizontalReverse={!!(i % 2)}
        imageURl={sources[i]}
      />
    );
  }

  return (
    <div className="stats">
      <Maintext />

      <div id="scroll-arrow" className="down-arrow">
        <Downarrow className="logo" />
      </div>

      <div className="stats-wrapper">{renderStatArray}</div>

      <div className="bonus-info">
        <span>
          Lifetime <span style={{ color: "rgba(90,214,196,1)" }}>free.</span>
        </span>
        <span>
          No joining fee.
          <br />
        </span>
        <span>No annual charges.</span>
      </div>
    </div>
  );
};

export default Stats;
