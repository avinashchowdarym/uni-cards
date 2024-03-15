import "../../styles/index.scss";
import PCI from "../../icons/PCI";
import waImg from "../../whatsapp_bubble.webp";
import rupeeImg from "../../rupee_bubble.webp";
import antivirusImg from "../../antivirus_bubble.webp";

const MFItem = (props) => {
  return (
    <div
      className="mf-item"
      style={{
        flexDirection: props.horizontalReverse ? "row-reverse" : undefined,
      }}
    >
      <div className="img-part">
        <img src={props.imgSource} className="img" />
      </div>
      <div
        className="text-part"
        style={
          props.horizontalReverse
            ? { marginLeft: "0px" }
            : { marginRight: "30px" }
        }
      >
        <div className="major">{props.mT}</div>
        <div className="sub">
          {props.sT === undefined ? (
            <div className="pic">
              <PCI />
            </div>
          ) : (
            <div className="text">{props.sT}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const MoreFeatures = () => {
  const majorTexts = [
    "Help, just a WhatsApp away. Anytime, Anyday.",
    "No hidden charges, no last minute surprises.",
    "Super secure. Because we care about your money.",
  ];
  const subTexts = [
    "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
    "100% money back guarantee if a charge is applied without your knowledge.",
    undefined,
  ];

  return (
    <div className="more-features">
      <div className="more-features-wrapper">
        <MFItem
          imgSource={waImg}
          mT={majorTexts[0]}
          sT={subTexts[0]}
          horizontalReverse={false}
        />
        <MFItem
          imgSource={rupeeImg}
          mT={majorTexts[1]}
          sT={subTexts[1]}
          horizontalReverse={true}
        />
        <MFItem
          imgSource={antivirusImg}
          mT={majorTexts[2]}
          sT={subTexts[2]}
          horizontalReverse={false}
        />
      </div>
    </div>
  );
};

export default MoreFeatures;
