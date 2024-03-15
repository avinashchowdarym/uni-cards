import "../styles/index.scss";
import Input from "./PhoneNumber/Input";
import rightArrow from "../right_arrow.svg";
const StickyInputBar = (props) => {
  return (
    <>
      <>
        <div className="mobile">
          <div className="mobile-sticky">
            <div className="sticky-input-mobile">
              <div style={{ paddingLeft: 20, marginTop: 10 }}>Apply Now</div>
              <img
                src={rightArrow}
                style={{ height: "15px", marginTop: "15px", paddingRight: 20 }}
              />
            </div>
          </div>
        </div>
      </>
      <div className="desktop">
        <div id="stubborn-input" className="sticky-input">
          <Input />
        </div>
      </div>
    </>
  );
};

export default StickyInputBar;
