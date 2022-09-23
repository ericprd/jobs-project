import { inputContainerStyle, inputStyle } from "../../style/login-style";

export default function InputPasswordRegister(props) {
  const { isErr, handleChange, input } = props;

  let errorStyle = isErr
    ? "focus:outline-red-600 border border-red-600"
    : "focus:outline-green-400/50";
  return (
    <div className='w-full flex flex-col justify-between items-center py-2'>
      <div className={inputContainerStyle}>
        <label htmlFor='password' className="basis-2/5">Password:</label>
        <input
          className={`${inputStyle} ${errorStyle}`}
          type='password'
          id='password'
          placeholder='Input password'
          name='password'
          onChange={handleChange}
          value={input}
        />
      </div>
      {isErr && (
        <p className='text-sm text-red-600'>
          Your password must be at least 8 characters long.
        </p>
      )}
    </div>
  );
}
