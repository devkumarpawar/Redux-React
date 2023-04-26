import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import "./Login.css";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { login, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("")
    const [redirect, setRedirect] = useState(false)
    const onSubmit = (data) => {
        console.log(data)
        console.log("mayurbhau")
        if (data.password != data.confirm_password) {
            console.log("Password not matching");
            setError("Password Not Matching");
            return;
        }
        let temp = {};
        temp.email = data.email;
        temp.password = data.password;
        temp.first_name = data.first_name;
        temp.last_name = data.last_name;
        console.log(temp);
        axios(
            {
                url: "https://reqres.in/api/register",
                method: "POST",
                data: temp,

            })
            .then(res => {
                console.log("dev")
                console.log(res)
                console.log("No Error")
                setRedirect(true)
                dispatch(register({

                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    password: data.password
                }))
                    .unwrap()
                    .then((res) => {
                        //   setSuccessful(true)
                        console.log("1");
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log("2");
                        console.log(err)
                        //   setSuccessful(false);
                    });




            })
            .catch(err => {
                console.log("Error")
                setError("Incorrect Credentials");
            })




    };
    console.log(errors);


    const dispatch = useDispatch();

    return (

        <div>
            <Header/>
            <div className="login">
                {
                    redirect ? <Navigate replace to={"/login"} /> : null
                }
                <form onSubmit={handleSubmit(onSubmit)} className="form-group"> 
                    <input className="form-control" type="text" placeholder="First Name" {...register("first_name", { required: true, maxLength: 80 })} />
                    <br />
                    <input className="form-control" type="text" placeholder="Last Name" {...register("last_name", { required: true, maxLength: 80 })} />
                    <br />
                    <input className="form-control" type="text" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
                    <br />
                    <input className="form-control" type="text" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} />
                    <br />
                    <input className="form-control" type="text" placeholder="Confirm Password" {...register("confirm_password", { required: true, maxLength: 100 })} />
                    <br />
                    <p style={{ color: "red" }}>{error}</p>
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;
