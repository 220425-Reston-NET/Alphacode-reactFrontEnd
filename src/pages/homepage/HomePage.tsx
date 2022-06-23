import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div id="home-image" className="home-image">
        <span className="about-medtrak">ABOUT MedTrak</span>
      </div>
      <div className="alert alert-info">
        <h1>About us</h1>
        <p className="about-paragraph">
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
      <aside className="aside-div">
        <h2>Our Services </h2>
        <article>
          We offer free medication tracking system. keep you connected your
          phamacy in lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </article>
      </aside>
      <footer >MEDTRAK 2022 by Daniel, Isreal , Jordan, and Kabba</footer>
    </>
  );
}

export default HomePage;
