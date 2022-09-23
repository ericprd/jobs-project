import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/register-components/input-component";
import { GlobalContext } from "../context/global-context";
import {
  closeErrorStyle,
  errorMessageStyle,
  inputCardStyle,
  loginButtonStyle,
  loginTitleStyle,
} from "../style/login-style";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { setIsLogin } = useContext(GlobalContext);

  const [isErr, setErr] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "email":
        setInput({ ...input, email: value });
        break;
      case "password":
        setInput({ ...input, password: value });
        break;
      default:
        return input;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { ...input };

    (async () => {
      try {
        const res = await axios.post(
          "https://dev-example.sanbercloud.com/api/login",
          data
        );

        const { user, token } = res.data;

        Cookies.set("token", token);
        Cookies.set("name", user.name);
        Cookies.set("image_url", user.image_url);
        Cookies.set("email", user.email);
        setIsLogin(true);

        setInput({
          email: "",
          password: "",
        });

        navigate("/dashboard");
      } catch (err) {
        setErr(true);
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={loginTitleStyle}>Login</h1>
      <div className={inputCardStyle}>
        {isErr && (
          <p className={errorMessageStyle}>
            Email or password wrong!
            <span className={closeErrorStyle} onClick={() => setErr(false)}>
              x
            </span>
          </p>
        )}

        {/* <LoginForm input={input} setInput={setInput} /> */}
        <InputRegister
          handleChange={handleChange}
          input={input.email}
          type='email'
          id='email'
          name='email'
          placeholder='email'
        />
        <InputRegister
          handleChange={handleChange}
          input={input.password}
          type='password'
          id='password'
          name='password'
          placeholder='password'
        />

        <button className={loginButtonStyle}>Sign In</button>
        <p>
          Don't have an account?
          <Link to='/register' className='text-sky-500'>
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
