import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import {
  inputCardStyle,
  loginTitleStyle,
  inputStyle,
  registerButtonStyle,
} from "../../style/login-style";
import InputRegister from "../register-components/input-component";

export default function ChangePassword() {
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const [changeMessage, setChangeMessage] = useState("");
  const [resStatus, setResStatus] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;


    switch (name) {
      case "current_password":
        setPasswords({ ...passwords, current_password: value });
        break;
      case "new_password":
        setPasswords({ ...passwords, new_password: value });
        break;
      case "new_confirm_password":
        setPasswords({ ...passwords, new_confirm_password: value });
        break;
      default:
        return passwords;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...passwords };
    (async () => {
      try {
        const res = await axios.post(
          "https://dev-example.sanbercloud.com/api/change-password",
          data,
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        );
        setPasswords({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
        setChangeMessage(res.data);
        setResStatus(res.status);
      } catch (err) {
        setResStatus(err.response.status);
        setChangeMessage(err.response.data);
      }
    })();
  };

  let statusStyle = "absolute w-70 py-1 px-5 -top-28 rounded-3xl ";

  return (
    <form onSubmit={handleSubmit} className='w-4/5 sm:w-3/5 mx-auto'>
      <h1 className={loginTitleStyle}>Change Password</h1>
      <div className={inputCardStyle}>
        {changeMessage && (
          <p
            className={
              statusStyle + (resStatus === 200 ? "bg-green-200" : "bg-red-200")
            }>
            {changeMessage}
            <span
              className='ml-4 border border-black/30 px-1 cursor-pointer inline-block rounded-lg'
              onClick={() => setChangeMessage("")}>
              x
            </span>
          </p>
        )}
        <InputRegister
          className={inputStyle}
          type='password'
          name='current_password'
          handleChange={handleChange}
          input={passwords.current_password}
        />

        <InputRegister
          type='password'
          name='new_password'
          handleChange={handleChange}
          input={passwords.new_password}
        />

        <InputRegister
          type='password'
          name='new_confirm_password'
          handleChange={handleChange}
          input={passwords.new_confirm_password}
        />

        <button className={registerButtonStyle}>Save</button>
      </div>
    </form>
  );
}
