import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function InnerPageOne(event: any) {
  // pokemons = drugs, setDrug = setPokemons
  const [drugs, setDrug] = useState([]);
  const [filteredPokemons, setFiltered] = useState([]);

  function handleInputChange() {
    setFiltered(
      drugs.filter((drug: any) => {
        return drug.name.includes(event.target.value);
      })
    );
  }

  useEffect(() => {
    //i need to send an asynchronous request
    async function getAllDrugs() {
      // https://pokeapi.co/api/v2/pokemon?limit=151
      // https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&search=ASHLYNA
      let results = await fetch(
        "https://api.fda.gov/drug/event.json?api_key=ZBlDery249OncKvRgxkWoZW30hQhizHMQS27sffQ&search=Oxycodone"
      );
      let responseBody = await results.json();
      console.log(results);
      setDrug(responseBody.results);
      setFiltered(responseBody.results);
    }
    // console.log(Response)

    getAllDrugs();
  }, []);
  return (
    <div className="main-container">
      <div className="input-container">
        <input type="text" onChange={handleInputChange} />
      </div>

      <div className="list-container">
        {filteredPokemons.map((drug: any, index) => {
          return (
            <Link
              className="drug-link"
              to={`/drug?search=${drug.name}`}
              key={index}
            >
              <button>{drug.name}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default InnerPageOne;
