import React, { useRef } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  const SignupRef = useRef(null);
  console.log(SignupRef);
  // document.getElementById("signup-form").submit();
  return (
    <>
      <h4 className="siignup-welcome">
        Sign up for your free MedTrack account
      </h4>

      <br />
      {/* we going to send info to data using form */}
      {/* action url will be our url to sever? */}

      <form ref={SignupRef} action="https://reqbin.com/echo/post/form">
      <h4 className="siignup-welcome">
        Sign up for your free MedTrack account
      </h4>
        <div className="inner-form">
          <h2>Sign Up</h2>
          {/* check for erro then display it => set error in else  */}
          {/* {error != "" ? <div className="error">{error}</div> : ""} */}
          <div className="form-group">
            <label htmlFor="name">Full Name: </label>
            <input className="form-control form-control-lg" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname"> Home Address:</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email:</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password</label>
            <input className="form-control" type="password" />
            <label htmlFor="password">Confirm Password</label>
            <input className="form-control" type="password" />
            <input type={"submit"} value={"Submit"} />
          </div>
          {/* <input type={"submit"} value={"SIGNIN"} /> */}
        </div>
      </form>

      <div className="terms-div">
        <p className="siignup-terms">
          By clicking the Submit button, you agree that you're awesome
          <a href="#">awesome terms and condition</a>
        </p>
      </div>
    </>
  );
}

export default SignUpForm;
