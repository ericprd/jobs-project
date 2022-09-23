import { inputContainerStyle, inputStyle } from "../../style/login-style";

export default function LoginForm(props) {
  const input = props.input;
  const setInput = props.setInput;

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

  return (
    <>
      <div className={inputContainerStyle}>
        <label htmlFor='email' className='basis-1/3'>
          Email:
        </label>
        <input
          className={inputStyle}
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
          value={input.email}
        />
      </div>
      <div className={`${inputContainerStyle} mb-10`}>
        <label htmlFor='password' className='basis-1/3'>
          Password:
        </label>
        <input
          className={inputStyle}
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
          value={input.password}
        />
      </div>
    </>
  );
}
