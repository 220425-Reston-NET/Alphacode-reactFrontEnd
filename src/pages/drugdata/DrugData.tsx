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
      p_userID: 2,
      //
    },
  ]);

  function updateUserID(e: any) {
    //+ sign will convert it to a number
    p_userID = +e.target.value;

    console.log(p_userID);
  }

  function onSubmit(e: any) {
    // e.preventDefault();

    fetch(
      "http://medtrack-env.eba-sqq54brs.us-east-1.elasticbeanstalk.com/User/ViewAllMedicine?" +
        new URLSearchParams({
          userID: p_userID,
        })
    )
      .then((response) => response.json())
      .then((users) => {
        setUser((previousData) => users);
      });
  }

  return (
    <div className="view-container">
      <Link className="navbar-brand" to={`/addmeds`}>
        {/* <button>{userEmail}</button> */}
        <input type={"submit"} value={"Click to upload medications"} />
      </Link>
      {/* displaying use meds container here */}
       <div className="display-med">
      <ul>
        {users.map((med) => (
          <p>{med.p_userID}</p>
        ))}
      </ul>
      <div>
        <form onSubmit={onSubmit}></form>
      </div>
      <div>
        <label>User current medication:</label>
        <input type="text" name="userID" onChange={updateUserID}></input>
        <input type={"submit"} value={"search"} />
      </div>
    </div>
      <div className="view-container">
        <h2>user Info from db goes here</h2>
      </div>
      
      <div className="card">
        <div className="search-div">
          <h2>learn more about your drugs:</h2>
          {/* onSubmit={onSubmit} */}
           <form >
            <input
              type="text"
              name="drugName"
              // onChange={}
              placeholder="name of a drug"
            />
            {/* <!-- my button  --> */}
            <button
              type="submit"
              value="Submit"
              id="search-btn"
              className="btn btn-outline-secondary btn-secondary"
            >
              🔍
            </button>
           </form>  
        </div>
        <div>
          <h5>Search history:</h5>
          <ul className="col-6 mb-3" id="ul"></ul>
        </div>
        <div className="col-4">
          {/* <!-- Content --> */}
          <h1 id="medicinalproduct"> Adderall</h1>
          <div id="drugdosagetext">51°C</div>
          {/* <img src="" alt="" id="icon" /> */}
          <div id="brand_name">Brand name here</div>
          <div id="actiondrug">action drug here</div>
          <div id="product_type"> drug / product type here</div>
          <div id="route">drug route here</div>
          <div id="primarysource"> where drug is from</div>
          <div id="manufacturer_name"> who made it</div>
        </div>
      </div>
    </div>
  );

 }
 
  

export default DrugData;
