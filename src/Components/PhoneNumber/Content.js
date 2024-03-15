import "../../styles/index.scss";
import Description from "./Description";
import Plus from "../../icons/Plus";
import Input from "./Input";
import nx_wave from "../../nx_wave_hero.png";

const Content = () => {
  return (
    <>
      <div className="content">
        <div>
          <Description />
          <div className="sub-text">
            1% Cashback <Plus /> 5x Rewards
            <Plus /> Zero Forex Markup
          </div>
          {true && (
            <>
              <Input />
              
            </>
          )}
        </div>
        <img src={nx_wave} className="hero-img"></img>
      </div>
    </>
  );
};

export default Content;
