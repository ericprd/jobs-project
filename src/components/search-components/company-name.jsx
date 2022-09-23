import { Apartment } from "@mui/icons-material";
import { inputAreaStyle, inputStyle } from "../../style/input-style";

export default function CompanyName(props) {
  const handleInput = props.handleInput;
  const input = props.input;

  const handleChange = (e) => {
    const value = e.target.value;

    handleInput({ ...input, company: value });
  };

  return (
    <div className={inputStyle}>
      <Apartment style={{ color: "black" }} className='mr-2' />
      <input
        type='text'
        name='company'
        placeholder='Nama perusahaan'
        className={inputAreaStyle}
        value={input.company}
        onChange={handleChange}
      />
    </div>
  );
}
