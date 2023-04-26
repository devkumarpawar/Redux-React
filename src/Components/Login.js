import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import "./Login.css";
import axios from 'axios';

import { login, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    console.log("mayurbhau")
    axios(
      {
        url: "https://reqres.in/api/login",
        method: "POST",
        data: data,

      })
      .then(res => {
        console.log("dev")
        console.log(res)
        dispatch(
          login({

            email: data.email,
            password: data.password,
            loggedIn: true,
          })
        );

      })
      .catch(err => {


      })




  };
  console.log(errors);


  const dispatch = useDispatch();

  return (

    <div>
      <Header/>
      <div className="login ">
        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
          <input className="form-control" type="text" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
          <br />
          <input className="form-control" type="text" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} />
          <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
