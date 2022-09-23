import Cookies from "js-cookie";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";

export default function Sidebar() {
  const { setInput, isEdit, setIsEdit, setIsFetch, setJobList, setIsLogin } =
    useContext(GlobalContext);

  const handleClick = () => {
    setIsEdit(false);
    setJobList([]);
    setIsFetch(true);
  };

  return (
    <aside className='w-3/12 bg-slate-500 text-white text-center sm:flex flex-col justify-center items-center gap-5 text-2xl sticky top-0 hidden'>
      <Link to='/dashboard/list-job-vacancy' onClick={handleClick}>
        Job Table
      </Link>
      {!isEdit && (
        <Link
          to='/dashboard/list-job-vacancy/create'
          onClick={() => {
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
    </aside>
  );
}
