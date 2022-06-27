import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RootObject } from "../drugmodel/Drug";
import "./DisplayMed.css";
function DisplayMed() {
  let search: any = "";

  let responseObject: any = {};
  const [drugs, setDrugs] = useState(responseObject);
  const [check, setCheck] = useState(false);
  const [isFailed, setFailed] = useState(false);

  // useEffect(() => {
  //   onSubmit(e)
  // },[])
  // React.ChangeEvent<HTMLInputElement>
  function updateDrugSearch(e: any) {
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
      "https://api.fda.gov/drug/event.json?" +
        new URLSearchParams({
          search: search,
        })
    )
      .then((response) => response.json())
      .then((drugs: RootObject) => {
        console.log(drugs);
        setDrugs(drugs);
        setCheck(true);
      });
  }
  return (
    <>
      <Link className="back" to={`/Drug`}>
        {/* <button>{userEmail}</button> */}
        <input type={"submit"} value={"Back"} />
      </Link>
      <div className="display-med">
        <div className="display-med2">
          <form onSubmit={onSubmit}>
            {/* <div className="inner-api-div"> */}
            <h2>Type medication name to learn more</h2>

            <label></label>
            <input
              type="text"
              name="search"
              onChange={updateDrugSearch}
            ></input>
            {isFailed && (
              <span style={{ color: "red" }}>Medication was not found!</span>
            )}
            <input type={"submit"} value={"Search"} className="inputclass" />
            {/* </div> */}
          </form>
        </div>
        <ul className="ul">
          <h2> Searched results:</h2>
          {
            check && (
              <div>
                {" "}
                <div>
                  {"A medication administration route:" +
                    " " +
                    drugs.results[0].patient.drug[0].drugadministrationroute}
                </div>
                <div>
                  {"Form of medication for use:" +
                    " " +
                    drugs.results[0].patient.drug[0].drugdosageform}
                </div>
                <div>
                  {" "}
                  {"The medical conditions for use:" +
                    " " +
                    drugs.results[0].patient.drug[0].drugindication}
                </div>
                <div>
                  {" "}
                  {"A substance or combination of substances :" +
                    " " +
                    drugs.results[0].patient.drug[0].medicinalproduct}
                </div>
                <div>
                  {/* {"Active substance:" +
                  " " +
                  drugs.results[0].patient.drug[0].activesubstance
                    .activesubstancename} */}
                </div>
                <div>
                  {"Type of medication:" +
                    " " +
                    drugs.results[0].patient.drug[0].openfda.product_type}
                </div>
                <div className="fa-solid fa-user">
                  {"How to take it:" +
                    " " +
                    drugs.results[0].patient.drug[0].openfda.route}
                </div>
                <div>
                  {"Generic names:" +
                    " " +
                    drugs.results[0].patient.drug[0].openfda.generic_name}
                </div>
                <div>
                  {"Brand Names:" +
                    " " +
                    drugs.results[0].patient.drug[0].openfda.brand_name}
                </div>
              </div>
            )
            // <li> {drugs.results[0].patient.drug[0].actiondrug}</li>
            // <li> {drugs.results[0].patient.drug[0].activesubstance}</li>
            // <li> {drugs.results[0].patient.drug[0].drugauthorizationnumb}</li>
            // <li> {drugs.results[0].patient.drug[0].drugcharacterization}</li>
            // <li> {drugs.results[0].patient.drug[0].drugdosageform}</li>
            // <li> {drugs.results[0].patient.drug[0].drugdosagetext}</li>
            // <li> {drugs.results[0].patient.drug[0].drugenddate}</li>
            // <li> {drugs.results[0].patient.drug[0].drugenddateformat}</li>
            // <li> {drugs.results[0].patient.drug[0].drugdosageform}</li>
            // <li> {drugs.results[0].patient.drug[0].drugstartdate}</li>
            // <li> {drugs.results[0].patient.drug[0].drugstartdateformat}</li>
          }
          {/* {drugs.map((drug) => (
          <>
            <div className="api-results">
              {drug.brand_name}
              {drug.drugdosagetext}
              {drug.medicinalproduct}
              {drug.roduct_type}
              {drug.route}
            </div>
          </>
        ))} */}
        </ul>
      </div>
      <footer className="thefooter">
        MEDTRAK 2022 by Daniel, Isreal , Jordan, and Kabba
      </footer>
    </>
  );
}

export default DisplayMed;
