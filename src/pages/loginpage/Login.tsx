import React, { useState } from "react";
import "./Login.css";

function Login({}) {
  // Hooks
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const SubmitHandler = () => {
    // e.preventDefault();

    Login(details);
  };
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <div className="inner-form-login">
          <h2>Login</h2>
          {/* check for erro then display it => set error in else  */}
          {/* {error != "" ? <div className="error">{error}</div> : ""} */}
          <div className="form-group">
            <label htmlFor="name"> Full Name</label>
            {/* omchange  to grab login info */}
            <input
              className="form-control form-control-lg"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email Address </label>
            <input
              className="form-control form-control-lg"
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              className="form-control form-control-lg"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>
          <input type={"submit"} value={"LOGIN"} />
        </div>
      </form>
    </>
  );
}

export default Login;
