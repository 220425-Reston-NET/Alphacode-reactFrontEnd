import React, { useState } from "react";
// import "./DisplayMed.css";
function DisplayMed() {
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
  //   React.FormEvent<HTMLFormElement>

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
  return (<>
  
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
    </>
  );
}

export default DisplayMed;
