import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Drug } from "../drugmodel/Drug";
import "./DrugData.css";

// function DrugData() {
//   const [drugs, setDrugs] = useState([]);
//   const [filteredDrugs, setFiltered] = useState([]);

//   function handleInputChange(event: any) {
//     setFiltered(
//       drugs.filter((drug: any) => {
//         return drug.name.includes(event.target.value);
//       })
//     );
//   }

//   useEffect(() => {
//     //i need to send an asynchronous request
//     // https://pokeapi.co/api/v2/pokemon?limit=151
//     async function getAllPokemon() {
//       let response = await fetch(
//           //drug_interactions:caffeine
//         //   shows he list of active ingredients of a drug product.
//         "https://api.fda.gov/drug/label.json?search=drug_interactions:caffeine&count=openfda.substance_name.exact"
//       );
//       console.log(response);

//       let responseBody = await response.json();

//       setDrugs(responseBody.results);
//       setFiltered(responseBody.results);

//       console.log(responseBody);
//     }

//     getAllPokemon();
//   }, []);

//   return (
//     <div className=".view-container">
//       <div className=".view-container">
//         {/* <input type="text" onChange={handleInputChange} /> */}
//         <div className="col-4">
//           {/* <!-- Content --> */}
//           <h1 id="medicinalproduct"> Adderall</h1>
//           <div id="drugdosagetext">51°C</div>
//           {/* <img src="" alt="" id="icon" /> */}
//           <div id="brand_name">Brand name here</div>
//           <div id="actiondrug">action drug here</div>
//           <div id="product_type"> drug / product type here</div>
//           <div id="route">drug route here</div>
//           <div id="primarysource"> where drug is from</div>
//           <div id="manufacturer_name"> who made it</div>
//         </div>
//       </div>

//       <div className="view-container">
//         {filteredDrugs.map((drug: any, index) => {
//           return (
//             <p
//               className="poke-link"
//               //   to={`/card?pokemon=${drug.name}`}
//               key={index}
//             >
//               <h6>{drug.name}</h6>
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default DrugData;

// ------------- up down pick an delete one

function DrugData() {
  //need this to retrieve query param
  let drugName = "";
  let drugBrand = "";
  let drugMaker = "";
  const [drugs, setDrug] = useState([
    {
      medicinalproduct: "",
      drugdosagetext: "",
      primarysource: "",
      brand_name: "",
      drugcharacterization: "",
      product_type: "",
      route: "",
      xmanufacturer_name: "",
    },
  ]);

  function updateDrugName(e: React.ChangeEvent<HTMLInputElement>) {
    drugName = e.target.value;
    // console.log(pokeName);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('https://api.fda.gov/drug/label.json?search=drug_interactions:caffeine&count=openfda.substance_name.exact'
    )
      .then((response) => response.json())
      .then((data) => console.log(data) );
  } 
      //   "https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&search=Oxycodone"

 // https://api.fda.gov/drug/label.json?search=drug_interactions:caffeine&count=openfda.substance_name.exact

 
  //   useEffect(() => {
  //     // let drugName = searchParams.get("pokemon");
  //     // https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&${drugName}

  //     async function getOneDrug() {
  //       let results = await fetch(
  //         `https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&search=Oxycodone`
  //       );
  //       let responseBody = await results.json();

  //       console.log(results);

  //       setDrug(responseBody);
  //     }

  //     getOneDrug();
  //   }, []);
  // results.drug.blah
  return (
    <div className="view-container">
        <Link className="navbar-brand" to={`/addmeds`}>
          {/* <button>{userEmail}</button> */}
          <input type={"submit"} value={"AddMeds"} />
          </Link>
        <div className="view-container">

            <h2>user Info from db goes here</h2>
        </div>
            {/* <ul>
            {drugs.map(drug => <li>{drug.medicinalproduct}</li>)}
        </ul> */}
        <div className="card">
            {/* <div id="drug-name">
            {drug.medicinalproduct +
                ` ${drug.drugdosagetext}` +
                ` ${drug.drugcharacterization}` +
                ` ${drug.primarysource}` +
                ` ${drug.brand_name}` +
                ` ${drug.actiondrug}` +
                ` ${drug.product_type}` +
                ` ${drug.route}` +
                ` ${drug.manufacturer_name}`}
            </div> */}
            <span className="calen-div">
          <h3>Daneil Calender goes here</h3>
      </span>
            <div className="search-div">
            <h2>learn more about your drugs:</h2>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="drugName"
                onChange={updateDrugName}
                className="drug-search"
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
