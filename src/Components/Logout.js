import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";
import Header from "./Header";
import Footer from "./Footer";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  };

  return (
    <div>
      <Header/>
      <form className="logout">
        <h1>
          Welcome <span className="user__name">{user.name}</span>!
        </h1>
        <button className="logout__button" onClick={(e) => logout(e)}>
          Log out
        </button>
      </form>
      <Footer/>
    </div>
  );
};

export default Logout;
