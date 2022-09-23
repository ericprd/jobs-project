import Cookies from "js-cookie";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { featureCardStyle, featuresStyle } from "../../style/features-style";

export default function DashboardComponent() {
  const { setIsEdit, setIsLogin, setInput } = useContext(GlobalContext);

  return (
    <div className='w-full mx-auto mt-14 pt-10 text-center'>
      <p className='text-3xl font-bold mb-5'>Welcome {Cookies.get("name")}!</p>
      <p className='text-xl mb-10'>
        This page containt tools that you can use.
      </p>
      <div className={`${featuresStyle} w-4/5 mx-auto`}>
        <Link to='/dashboard/list-job-vacancy' className={featureCardStyle}>
          <p className='text-2xl mb-2'>Job Table</p>
          <p className='text-sm'>
            In this menu, you can manage all of jobs vacancy that available in
            database.
          </p>
        </Link>
        <Link
          to='/dashboard/list-job-vacancy/create'
          className={featureCardStyle}
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
          <p className='text-2xl mb-2'>Add Job</p>
          <p className='text-sm'>
            In this menu, you can create job vacancy to the database.
          </p>
        </Link>
        <Link to='/dashboard/profile' className={featureCardStyle}>
          <p className='text-2xl mb-2'>Profile</p>
          <p className='text-sm'>
            You want to see your profile? then this menu is the right thing for
            you.
          </p>
        </Link>
        <Link to='/dashboard/change-password' className={featureCardStyle}>
          <p className='text-2xl mb-2'>Change Password</p>
          <p className='text-sm'>
            You messed up with your code? or there are people that know your
            password? change it quickly here.
          </p>
        </Link>
        <Link
          to='/'
          className={featureCardStyle}
          onClick={() => {
            Cookies.remove("token");
            Cookies.remove("name");
            Cookies.remove("email");
            Cookies.remove("img");
            setIsEdit(false);
            setIsLogin("false");
          }}>
          <p className='text-2xl mb-2'>Log Out</p>
          <p className='text-sm'>Want to leave? then this is the exit way.</p>
        </Link>
      </div>
    </div>
  );
}
