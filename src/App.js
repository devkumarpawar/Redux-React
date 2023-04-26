import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";
import Home from "./Components/Home";

const App = () => {
  const user = useSelector(selectUser);
  console.log("def")
  console.log(user);
  console.log("defvvv")
  return <div>

    <Routes>

      {/* <Route path='/temp' element={<Login/>} /> */}
      <Route path='/welcome' element={user ?
        <Logout /> : <Navigate replace to={"/login"} />} />
      <Route path='/login' element={user ?
        <Navigate replace to={"/welcome"} /> : <Login />} />
      <Route path='/register' element={user ?
        <Navigate replace to={"/welcome"} /> : <Register />} />
         <Route path='/' element={user ?
        <Navigate replace to={"/welcome"} /> : <Home/>} />
    </Routes>



  </div>;
};

export default App;
