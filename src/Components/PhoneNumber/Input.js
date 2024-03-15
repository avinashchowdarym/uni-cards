import ClearCross from "../../icons/ClearCross";
import Validated from "../../icons/Validated";
import Warn from "../../icons/Warn";
import "../../styles/phone-number.scss";
import { useState } from "react";
const Input = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validator, setValidator] = useState("");
  const [agreed, setAgreed] = useState(false);

  const phoneNumberHandler = (e) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "" || reg.test(e.target.value))
      setPhoneNumber(e.target.value);
    if (e.target.value.length === 10) {
      setValidator("okay");
    } else setValidator("clear");
  };
  const clearNumber = () => {
    setPhoneNumber("");
    setValidator("clear");
  };

  return (
    <>
      <div className="input rounded-xl">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          className="input-field"
          onChange={phoneNumberHandler}
          maxlength="10"
        />
        {validator === "okay" ? (
          <Validated />
        ) : validator === "clear" ? (
          <div onClick={clearNumber} className="clear">
            <ClearCross />
          </div>
        ) : null}
        <div
          className={`apply rounded-xl ${
            agreed && validator === "okay" ? "" : "disabled"
          }`}
        >
          Apply Now
        </div>
      </div>
      <>
        <form className="agreement" onClick={() => setAgreed(!agreed)}>
          <input type="checkbox" checked={agreed}></input>
          <div className="text">
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </div>
        </form>
      </>
    </>
  );
};

export default Input;
