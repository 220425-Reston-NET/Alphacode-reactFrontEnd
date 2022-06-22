import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Drug } from "../drugmodel/Drug";

function DrugData() {
  //need this to retrieve query param
  const [searchParams, setSearchParams] = useSearchParams();
  const [drug, setDrug] = useState({} as Drug);
  const [isShiny, setShiny] = useState(false);

  useEffect(() => {
    let drugName = searchParams.get("pokemon");
    // https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&${drugName}

    async function getOneDrug() {
      let results = await fetch(
        `https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&search=Oxycodone`
      );
      let responseBody = await results.json();

      console.log(results);

      setDrug(responseBody);
    }

    getOneDrug();
  }, []);
  // results.drug.blah
  return (
    <div className="view-container">
      <div className="card">
        <div id="drug-name">
          {drug.medicinalproduct +
            ` ${drug.drugdosagetext}` +
            ` ${drug.drugcharacterization}` +
            ` ${drug.primarysource}` +
            ` ${drug.brand_name}` +
            ` ${drug.actiondrug}` +
            ` ${drug.product_type}` +
            ` ${drug.route}` +
            ` ${drug.manufacturer_name}`}
        </div>
        <div className="search-div">
          <h2>learn more about your drugs:</h2>
          <form id="form">
            <input
              type="text"
              id="input"
              className="search-bar"
              placeholder="name of a city"
            />
            {/* <!-- my button  --> */}
            <button
              type="submit"
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
