import { inputContainerStyle, inputStyle } from "../../style/login-style";

export default function InputRegister(props) {
  const { handleChange, input, type, name } = props;

  const inputName = name.split("_");
  const nameArr = [];
  inputName.forEach((data) => {
    nameArr.push(data[0].toUpperCase() + data.substring(1));
  });

  return (
    <>
      <div className={inputContainerStyle}>
        <label htmlFor={name} className='basis-2/5'>
          {nameArr.join(" ")}:
        </label>
        <input
          className={inputStyle}
          type={type}
          id={name}
          name={name}
          placeholder={nameArr.join(" ")}
          onChange={handleChange}
          value={input}
          required={true}
        />
      </div>
    </>
  );
}
