import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { searchStyle } from "../../style/search-style";
import CompanyName from "../search-components/company-name";
import JobName from "../search-components/job-name";
import Location from "../search-components/location";

export default function Search() {
  const { searchParams, setSearchParams, input, setInput } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const handleInput = (val) => {
    setInput(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ ...searchParams, ...input });
    navigate("/job-vacancy");
  };

  return (
    <form className={searchStyle} onSubmit={handleSubmit}>
      <JobName input={input} handleInput={handleInput} />
      <Location input={input} handleInput={handleInput} />
      <CompanyName input={input} handleInput={handleInput} />
      <input
        type='submit'
        value='Cari'
        className='bg-red-300 py-2 px-4 rounded-lg cursor-pointer'
      />
    </form>
  );
}
