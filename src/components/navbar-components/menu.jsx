import Cookies from "js-cookie";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import {
  menu_style,
  menu_style_mobile,
  signup_style_btn,
} from "../../style/navbar-style";
import User from "./user";

export default function Menu() {
  const { setInput, setSearchParams, setIsEdit, setIsFetch, setJobList } =
    useContext(GlobalContext);

  const handleClick = (e) => {
    setJobList([]);
    setInput({ job: "", company: "", location: "" });
    setSearchParams({ job: "", company: "", location: "" });
    setIsFetch(true);
  };

  return (
    <div className={menu_style + menu_style_mobile}>
      <Link to='/' onClick={handleClick}>
        Home
      </Link>
      <Link to='/job-vacancy' onClick={handleClick}>
        Job Vacancy
      </Link>
      {!Cookies.get("token") ? (
        <>
          <Link to='/login' onClick={handleClick}>
            Sign In
          </Link>
          <Link
            to='/register'
            className={signup_style_btn}
            onClick={handleClick}>
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link
            to='dashboard'
            onClick={() => {
              setIsEdit(false);
            }}>
            Dashboard
          </Link>
          <User />
        </>
      )}
    </div>
  );
}
