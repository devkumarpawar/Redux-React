import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
export default function Header() {
    const user = useSelector(selectUser);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <p class="navbar-brand" >Navbar</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <p class="nav-link " ><NavLink style={{ textDecoration: 'none', color: 'black' }}  to="/" >Home</NavLink></p>
                        </li>
                        {
                            user ? null :
                                <li class="nav-item">
                                    <p class="nav-link" ><NavLink style={{ textDecoration: 'none', color: 'black' }}  to="/login" >Login</NavLink></p>
                                </li>
                        }
                         {
                            user ? null :
                                <li class="nav-item">
                                    <p class="nav-link" ><NavLink style={{ textDecoration: 'none', color: 'black' }}  to="/register" >Register</NavLink></p>
                                </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
