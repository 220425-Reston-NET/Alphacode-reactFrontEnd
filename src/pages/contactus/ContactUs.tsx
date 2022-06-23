import React from "react";
import InnerPageOne from "../mainpages/InnerPageOne";
import "./ContactUs.css";
// import InnerPageOne from "./mainpages/InnerPageOne";


function ContactUs() {
  // const {} = InnerPageOne("https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json")

  return (
    <>
    {/* <h2> {data.setup}</h2> */}
      <div className="help-div">
      <h2 className="contact-welcome"> Contact us</h2>

        <p className="help-para">
          For the fastest service, please call the phone number listed below.
        </p>
        <br />
        <div className="bs">
            <h1>
            MedTrak Members
            </h1>
          Call for MedTrak Beneficiary Customer Service or Technical Support for
          the MedTrak Beneficiary Program. (887) 363-1303 TTY users call: (897)
          540-6261 24 hours a day, 7 days a week. 
        </div>
        <div className="bs2">
            <h1>
           Non-MedTrak Members
            </h1>
          Call for non-members Beneficiary Customer Service or Technical Support for
          the MedTrak Beneficiary Program. (887) 363-1303 TTY users call: (897)
          540-6261 ,  5 days a week. 
        </div>
      </div>
      <br />
     
    </>
  );
}

export default ContactUs;
