import React from "react";
import MedTrak from './medtraklogo/medtrak.png'

function HomePage() {
  return (
    <>
      <div>
        {/* <img src={MedTrak} height={200}
          width={200} alt="logo" /> */}
          {/* -------none of these ways work */}
        {/* why I can't use normal image tag */}
         {/* <div className="image">
        <img
          src={require("./medtraklogo/MedTrak.png").default}
          height={200}
          width={200}
          alt="medtrak logo"
          />
        </div> */}
        <h5 className="w3-center w3-padding-64">
          
          <span className="about-medtrak">ABOUT MedTrak</span>
        </h5>
        <div className="alert alert-info">
        <p>
          MedTrak was founded in Raveture by Daniel, Israel, Jordan and Kabba in
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          In addition to our medication intake tracker and menu, we serve fresh
          made-to-order breakfast and lunch sandwiches, as well as a selection
          of sides and salads and other good stuff.
        </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
