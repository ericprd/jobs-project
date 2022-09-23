import { SearchOutlined } from "@mui/icons-material";
import { inputAreaStyle, inputStyle } from "../../style/input-style";

export default function JobName(props) {
  const handleInput = props.handleInput;
  const input = props.input;

  const handleChange = (e) => {
    const value = e.target.value;

    handleInput({ ...input, job: value });
  };

  return (
    <div className={inputStyle}>
      <SearchOutlined style={{ color: "black" }} className='mr-2' />
      <input
        type='text'
        name='job'
        placeholder='Nama pekerjaan'
        className={inputAreaStyle}
        value={input.job}
        onChange={handleChange}
      />
    </div>
  );
}
