import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/register-components/input-component";
import InputPasswordRegister from "../components/register-components/input-password-component";
import {
  closeErrorStyle,
  errorMessageStyle,
  inputCardStyle,
  registerButtonStyle,
} from "../style/login-style";

export default function Register() {
  const [isErr, setErr] = useState(false);
  const [input, setInput] = useState({
    image_url: "https://cdn-icons-png.flaticon.com/512/727/727399.png",
    name: "",
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "name":
        setInput({ ...input, name: value });
        break;
      case "email":
        setInput({ ...input, email: value });
        break;
      case "password":
        setInput({ ...input, password: value });
        setErr(false);
        break;
      default:
        return input;
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { ...input };

    if (data.password.length < 8) {
      setErr(true);
    } else {
      (async () => {
        try {
          await axios.post(
            " https://dev-example.sanbercloud.com/api/register ",
            data
          );
          setInput({
            image_url: "https://cdn-icons-png.flaticon.com/512/727/727399.png",
            name: "",
            email: "",
            password: "",
          });
          navigate("/login");
        } catch (error) {
          setErrMessage(error.response.data);
        }
      })();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='text-center mt-20 mb-10 text-3xl'>Register</h1>

      <div className={inputCardStyle}>
        {errMessage && (
          <p className={errorMessageStyle}>
            {errMessage}
            <span className={closeErrorStyle} onClick={() => setErrMessage("")}>
              x
            </span>
          </p>
        )}
        <InputRegister
          handleChange={handleChange}
          input={input.name}
          type='text'
          name='name'
        />
        <InputRegister
          handleChange={handleChange}
          input={input.email}
          type='email'
          name='email'
        />
        <InputPasswordRegister
          isErr={isErr}
          handleChange={handleChange}
          input={input.password}
        />
        <button className={registerButtonStyle}>Sign Up</button>
        <p>
          Have an account?{" "}
          <Link to='/login' className='text-sky-700'>
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
