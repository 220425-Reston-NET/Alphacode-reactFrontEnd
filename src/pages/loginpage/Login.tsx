import React, { useEffect, useId, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Login.css";

function Login() {
  let userEmail = "";
  let userPassword = "";
  // make a function if loging info matches are user in db = welcome page else
  // user not found message display.
  const [users, setUser] = useState({
    userID: 0, //what datatype isreal want
    name: "",
    email: "",
    password: "",
  });

  function GetCustomerEmail(e: React.ChangeEvent<HTMLInputElement>) {
    userEmail = e.target.value;
    console.log(userEmail);
  }

  function GetCustomerPassword(e: React.ChangeEvent<HTMLInputElement>) {
    userPassword = e.target.value;
    console.log(userPassword);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch(
      "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/SearchUserByEmailAndPassword?" +
        new URLSearchParams({
          Email: userEmail,
          Password: userPassword,
        })
      // {}
    )
      .then((response) => response.json())
      .then((users) => {
        // change/ attached user to user id in db
        setUser((previousData) => users);

        goToNewCustInfo();
      });
  }

  const navigate = useNavigate();
  const goToNewCustInfo = () => {
    navigate("/DrugData");
  };

  //   async function getUserLoginInfo() {
  //     //  change this to get data from server
  //     let response = await fetch(
  //       "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/SearchUserByEmailAndPassword"
  //     );
  //     let responseBody = await response.json(); // should this stringify to json format ?
  //     console.log(responseBody);
  //     setLogin(responseBody);

  //   }
  //   getUserLoginInfo();
  // }, []);
  // function  to show inner page when login is true

  return (
    <>
      {/* <button onSubmit={loginClickHandler}>Click Me</button> */}
      <br />
      <br />
      <hr />

      <p className="login-welcome">
        Welcome back. MedTrak hope you find strength with each new day.
      </p>
      {/* SubmitHandler to getuserinf */}
      <form onSubmit={onSubmit}>
        <div className="inner-form-login">
          <h2>Please login using your signed up information</h2>
          {/* check for erro then display it => set error in else  */}
          {/* {error != "" ? <div className="error">{error}</div> : ""} */}
          {/* name="pokeName" onChange={updatePokeName} */}
          <div className="form-group">
            <label htmlFor="email"> Email Address </label>
            <input
              className="form-control form-control-lg"
              type="email"
              name="userEmail"
              onChange={GetCustomerEmail}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              className="form-control form-control-lg"
              type="password"
              name="userPassword"
              onChange={GetCustomerPassword}
            ></input>
          </div>
          {/* <Link className="poke-link" to={`/drug${userEmail}`}> */}
          {/* <button>{userEmail}</button> */}
          <input type={"submit"} value={"LOGIN"} />
          {/* </Link> */}
        </div>
      </form>
    </>
  );
}

export default Login;
