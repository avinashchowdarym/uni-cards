import "../../styles/index.scss";
import MoreFeatures from "./MoreFeatures";
import cricleImg from "../../circles.png";
import mobile from "../../mobile.webp";
import mobile2 from "../../mobile2.webp";

const Features = () => {
  return (
    <div className="features">
      <img
        src={cricleImg}
        style={{
          position: "absolute",
        }}
      />
      <div className="features-wrapper">
        <div className="feature-item">
          <div className="text-part">
            <div className="white">
              We've all heard of instant groceries, now say hello to
            </div>
            <div className="gradient g1">instant credit.</div>
            <div className="detail d1">
              0% hassle, 100% paperless. Get your Uni Card instantly.
            </div>
          </div>
          <img src={mobile} className="mob-img" />
        </div>
        <div className="feature-item">
          <div className="text-part">
            <div className="white">With Uni,</div>
            <div className="gradient g2">you're always in control.</div>
            <div className="detail d2">
              Set your own payment limits. Choose how and where you spend. Lock
              and unlock your card. All right from the app.
            </div>
          </div>
          <img src={mobile2} className="mob-img" />
        </div>
      </div>
      <MoreFeatures />
    </div>
  );
};

export default Features;
