import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/loginpage/Login';
import SignUpForm from './pages/signup/SignUpForm';
import Nav from './pages/share/Nav';


function App() {
  const mainUser = {
    email: "kabba@kabba.com",
    password: "kabba123"
  }
  const [userinfo, setUserInfo] = useState({name: "", email: ""});
  const [errormessage, setErroMessage] = useState("");

  const Signin = (details: any) => {
    console.log(details)
  }
  return (

   <>
   <Nav/>
   <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>


    </Routes>
   </>
  );
}

export default App;
