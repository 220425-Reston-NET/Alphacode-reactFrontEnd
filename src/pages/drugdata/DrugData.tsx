import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Drug } from "../drugmodel/Drug";
import "./DrugData.css";

function DrugData() {
  // fetcthing user meds in db
  let p_userID: any = 2;
  const [users, setUser] = useState([
    {
      p_userID: 0,
      medID: 0,
      medName: "string",
      medDose: 0,
      quantity: 0,
      userID: 0,
      //
    },
  ]);

  function updateUserID(e: any) {
    //+ sign will convert it to a number
    p_userID = +e.target.value;

    console.log(p_userID);
  }

  function onSubmit(e: any) {
    e.preventDefault();

    fetch(
      "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/ViewAllMedicine?" +
        new URLSearchParams({
          p_userID: p_userID,
        })
    )
      .then((response) => response.json())
      .then((users) => {
        setUser((previousData) => users);
      });
  }

  return (
    <div className="view-container">
      <div className="signout">
        <Link className="signout-link" to={`/`}>
          {/* <button>{userEmail}</button> */}
          <input type={"submit"} value={"Sign Out"} />
        </Link>
      </div>
      <Link className="navbar-brand" to={`/addmeds`}>
        {/* <button>{userEmail}</button> */}
        <input type={"submit"} value={"Click to upload medications"} />
      </Link>
      {/* displaying use meds container here */}

      <div className="card">
        <div className="display-med">
          <form onSubmit={onSubmit}>
            {/* </div>
        <div> */}
            <label>search for current medication with your ID:</label>
            <input type="text" name="userID" onChange={updateUserID}></input>
            <input type={"submit"} value={"search"} />
          </form>
          <ul>
            <h2> User medications in the system:</h2>

            {users.map((user) => (
              <>
                <div className="meds-in-db">
                  <div>{"Medication name: " + user.medName}</div>
                  <div>{"Medication ID: " + user.medID}</div>
                  <div>{"Medication Dosage: " + user.medDose}</div>
                  <div>{"Medication quantity: " + user.quantity}</div>
                </div>
              </>
            ))}
          </ul>
        </div>
        <br />
        <br />
        <div className="search-div">
          <h2>Learn more about your medications:</h2>
          {/* onSubmit={onSubmit} */}
          <Link className="signout-link" to={`/dmeds`}>
            {/* <button>{userEmail}</button> */}
            <input type={"submit"} value={"learn"} />
          </Link>
          <h2>Click to set a reminder⏰:</h2>

          <Link className="signout-link" to={`/Scheduler`}>
            {/* <button>{userEmail}</button> */}
            <input type={"submit"} value={"Reminder"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DrugData;
