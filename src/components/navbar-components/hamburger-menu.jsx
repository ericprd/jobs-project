import { Close } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import {
  close_btn,
  hamburger_menu_container_style,
  hamburger_menu_container_style_hidden,
  hide_menu,
  registerBtn,
} from "../../style/navbar-style";

export default function HamburgerMenu(props) {
  const {
    setSearchParams,
    isHide,
    setIsHide,
    setEditMode,
    setIsFetch,
    setJobList,
    setInput,
    isEdit,
    setIsEdit,
    setIsLogin,
  } = useContext(GlobalContext);

  const handleSideMenu = () => {
    setIsHide(true);
  };

  const handleClick = (e) => {
    handleSideMenu();
    setIsHide(true);
    setJobList([]);
    setIsFetch(true);
    setInput({ job: "", company: "", location: "" });
    setSearchParams({ job: "", company: "", location: "" });
  };

  return (
    <div
      className={
        hamburger_menu_container_style +
        (!isHide ? hamburger_menu_container_style_hidden : hide_menu)
      }>
      <div className={close_btn} onClick={handleSideMenu}>
        <Close fontSize='larger' />
      </div>
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
          <Link to='/register' onClick={handleClick} className={registerBtn}>
            Sign Up
          </Link>
        </>
      ) : (
        <>
          <Link
            to='/dashboard'
            onClick={() => {
              setEditMode(false);
            }}>
            Dashboard
          </Link>

          <Link to='/dashboard/list-job-vacancy' onClick={handleClick}>
            Job Table
          </Link>
          {!isEdit && (
            <Link
              to='/dashboard/list-job-vacancy/create'
              onClick={() => {
                handleSideMenu();
                setInput({
                  title: "",
                  job_description: "",
                  job_qualification: "",
                  job_type: "",
                  job_tenure: "",
                  job_status: 0,
                  company_name: "",
                  company_city: "",
                  company_image_url: "",
                  salary_min: 0,
                  salary_max: 0,
                });
              }}>
              Add Job
            </Link>
          )}
          <Link to='/dashboard/profile' onClick={handleClick}>
            Profile
          </Link>
          <Link to='/dashboard/change-password' onClick={handleClick}>
            Change Password
          </Link>
          <Link
            to='/'
            onClick={() => {
              Cookies.remove("token");
              Cookies.remove("name");
              Cookies.remove("email");
              Cookies.remove("img");
              setIsEdit(false);
              setIsLogin("false");
            }}>
            Logout
          </Link>
        </>
      )}
    </div>
  );
}
