import "../../styles/index.scss";
import Header from "./Header";
import Content from "./Content";
import bgVid from "../../nxt_wave_bg.mp4";

const PhoneNumber = () => {
  return (
    <div className="phone-number">
      <video autoPlay loop muted id="bg-video">
        <source src={bgVid} type="video/mp4" />
      </video>
      <Header />
      <Content />
    </div>
  );
};

export default PhoneNumber;
