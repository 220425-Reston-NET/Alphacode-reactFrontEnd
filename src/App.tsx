import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/loginpage/Login';
import SignUpForm from './pages/signup/SignUpForm';
import Nav from './pages/share/Nav';
import MedTrak from "./medtraklogo/medtrak.png";
import InnerPageOne from "./pages/mainpages/InnerPageOne";
import ContactUs from "./pages/contactus/ContactUs";
import DrugData from "./pages/drugdata/DrugData";
import AddMedicine from "./pages/addmedicine/AddMedicine";
// import DrugData from "./pages/drugdata/DrugData";
import DisplayMed from "./pages/displaymeds/DisplayMed";
import DisplayApi from "./newdisplaymeds/DisplayApi";

function App() {
  const mainUser = {
    email: "kabba@kabba.com",
    password: "kabba123"
  }
  const [userinfo, setUserInfo] = useState({ name: "", email: "" });
  const [errormessage, setErroMessage] = useState("");

  return (
    <>
      <div style={{ backgroundImage: `url(${MedTrak})` }}></div>

      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/mainpage" element={<InnerPageOne />} />
        <Route path="/help" element={<ContactUs />} />
        <Route path="/drug" element={<DrugData />} />
        {/* <Route path="/model" element={<Drug/>} /> */}
        <Route path="/addmeds" element={<AddMedicine />} />
        <Route path="/dmeds" element={<DisplayMed  />} />
        {/* <Route path="/apimed" element={<DisplayApi  />} /> */}


        <Route path="/about-paragraph" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
