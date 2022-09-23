import { LocationOn } from "@mui/icons-material";
import { inputAreaStyle, inputStyle } from "../../style/input-style";

export default function Location(props) {
  const handleInput = props.handleInput;
  const input = props.input;

  const handleChange = (e) => {
    const value = e.target.value;

    handleInput({ ...input, location: value });
  };

  return (
    <div className={inputStyle}>
      <LocationOn style={{ color: "black" }} className='mr-2' />
      <input
        type='text'
        name='location'
        placeholder='Kota'
        className={inputAreaStyle}
        value={input.location}
        onChange={handleChange}
      />
    </div>
  );
}
