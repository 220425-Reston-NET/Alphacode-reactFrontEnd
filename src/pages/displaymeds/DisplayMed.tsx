import React, { useState } from "react";
import "./DisplayMed.css";
function DisplayMed() {
  let search: any = "";
  const [drugs, setDrugs] = useState([
    {
      search: "",
      medicinalproduct: "",
      drugdosagetext: "",
      brand_name: "",
      manufacturer_name: "",
      roduct_type: "",
      route: [],

      //
    },
  ]);
  // React.ChangeEvent<HTMLInputElement>
  function updateDrugSearch(e: any) {
    //+ sign will convert it to a number
    search = e.target.value;

    console.log(search);
  }
  //   React.FormEvent<HTMLFormElement>
  // React.FormEvent<HTMLFormElement>

  function onSubmit(e: any) {
    e.preventDefault();
    // https://api.fda.gov/drug/event.json?search=Acetaminophen
    // api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&

    fetch(
      "https://api.fda.gov/drug/event.json?search" +
        new URLSearchParams({
          search: search,
        })
    )
      .then((response) => response.json())
      .then((drugs) => {
        setDrugs((previousData) => drugs);
      });
  }
  return (
    <>
      <div className="display-med">
        <div className="inner-display-med">
          <ul>
            {drugs.map((med) => (
              // results.drug
              <p>{med.search}</p>
            ))}
          </ul>
          <div>
            <form onSubmit={onSubmit}></form>
          </div>
          <div>
            <label>User current medication:</label>
            <input
              type="text"
              name="userID"
              onChange={updateDrugSearch}
            ></input>
            <input type={"submit"} value={"search"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayMed;
