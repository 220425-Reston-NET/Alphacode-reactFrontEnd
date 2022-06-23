import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/loginpage/Login';
import SignUpForm from './pages/signup/SignUpForm';
import Nav from './pages/share/Nav';
import MainPage from './pages/mainpage/MainPage';
//import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';


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
        <Route path="/help" element={<ContactUs/>} />
        <Route path="/drug" element={<DrugData/>} />
        {/* <Route path="/model" element={<Drug/>} /> */}
        



        <Route path="/about-paragraph" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
