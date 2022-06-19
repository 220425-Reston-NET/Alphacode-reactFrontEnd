import React from "react";
import './SignUpForm.css'

function SignUpForm() {
  return (
    <>
      <form>
        <h4>sign up for your free MedTrack account</h4>

        <div className="inner-form">
          <h2>Sign Up</h2>
          {/* check for erro then display it => set error in else  */}
          {/* {error != "" ? <div className="error">{error}</div> : ""} */}
          <div className="form-group">
            <label htmlFor="name">First Name: </label>
            <input
              className="form-control form-control-lg"
              type="text"
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname"> Last Name:</label>
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
            <input type="button" value="Submit" />
          </div>

          {/* <input type={"submit"} value={"SIGNIN"} /> */}
        </div>
      </form>
      <div className="terms-div">
      <p>
        By clicking the Submit button, you agree that you're awesome <br />
        <a href="#">awesome terms and condition</a>
      </p>
      </div>
    </>
  );
}

export default SignUpForm;
