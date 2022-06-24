import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {Drug} from '../../src/pages/drugmodel/Drug'

function DisplayApi() {

    //need this to retrieve query param
    const [searchParams, setSearchParams] = useSearchParams();
    const [drugs, setDrug] = useState({} as Drug);

    useEffect(() => {
        let drugName = searchParams.get("drug")
        
        async function getOneDrug(){
            let response = await fetch(`https://api.fda.gov/drug/event.json?search${drugName}`);
            let responseBody = await response.json();

            console.log(responseBody);

            setDrug(responseBody);
        }
        getOneDrug();

    }, []);
  return (
    <div className='view-container'>
    <div className='card'>
        <div id="poke-name">{drugs.name + ` ${drugs.id}`}</div>
        {/* <div id="img-container">
            <img onClick={toggle} src={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default} alt={pokemon.name} />
        </div> */}
        <div><b>Abilities</b></div>
        {
            drugs.types.map((item, index) => {
                return (
                    <div key={index}>{item.type.name}</div>
                )
            })
        }
    </div>
</div> 
)

}

export default DisplayApi