import React, { useEffect, useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  // const SignupRef = useRef(null);
  // console.log(SignupRef);
  // document.getElementById("signup-form").submit();
  let userName = "";
  let userAddress = "";

  let userEmail = "";
  let userPassword = "";

  const [users, setUsers] = useState([
    {
      userId: 0,
      name: "",
      address: "",
      email: "",
      password: "",
    },
  ]);

  function UpDateCustomerName(e: React.ChangeEvent<HTMLInputElement>) {
    userName = e.target.value;
    console.log(userName);
  }

  function UpDateCustomerEmail(e: React.ChangeEvent<HTMLInputElement>) {
    userEmail = e.target.value;
    console.log(userEmail);
  }

  function UpDateCustomerAddress(e: React.ChangeEvent<HTMLInputElement>) {
    userAddress = e.target.value;
    console.log(userAddress);
  }

  function UpDateCustomerPassword(e: React.ChangeEvent<HTMLInputElement>) {
    userPassword = e.target.value;
    console.log(userPassword);
  }

  // submit event handler
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // stop page from refreshing
    e.preventDefault();

    fetch(
      "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/Adduser",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          address: userAddress,
          email: userEmail,
          pasword: userPassword,
        }),
      }
    );
  }

  // useEffect(() => {
  //   // http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/

  //   // http://pokemonapireston-env.eba-3kaqziuz.us-east-1.elasticbeanstalk.com/api/Pokemon/GetAllPokemon

  //   fetch("http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/user/adduser")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       setUsers((previousData) => users);
  //     });

  //   //Means it will override the default configuration of useEffect to always execute whenever a value changes
  // }, []);

  return (
    <>
      <h4 className="siignup-welcome">
        Sign up for your free MedTrack account
      </h4>

      <br />
      {/* we going to send info to data using form */}
      {/* action url will be our url to sever? */}

      {/* <form ref={SignupRef} action="http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/"> */}
      <form onSubmit={onSubmit}>
        <h4 className="siignup-welcome">
          Sign up for your free MedTrack account
        </h4>
        <div className="inner-form">
          <h2>Sign Up</h2>
          {/* check for erro then display it => set error in else  */}
          {/* {error != "" ? <div className="error">{error}</div> : ""} */}
          <div className="form-group">
            <label htmlFor="name">Full Name: </label>
            <input
              className="form-control form-control-lg"
              type="text"
              name="userName"
              onChange={UpDateCustomerName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname"> Home Address:</label>
            <input
              className="form-control"
              type="text"
              name="userAddress"
              onChange={UpDateCustomerAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email:</label>
            <input
              className="form-control"
              type="text"
              name="userEmail"
              onChange={UpDateCustomerEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password</label>
            <input
              className="form-control"
              type="password"
              name="userPassword"
              onChange={UpDateCustomerPassword}
            />
            {/* <label htmlFor="password">Confirm Password</label> */}
            {/* <input className="form-control" type="password" /> */}
            <input type={"submit"} value={"Submit"} className="submit-style" />
            {/* <button>Submit</button> */}
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
