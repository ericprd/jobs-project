/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { closeBtn } from "../../style/input-style";
import { inputCardStyle, loginTitleStyle } from "../../style/login-style";
import InputRegister from "../register-components/input-component";

export default function JobForm() {
  const {
    isEdit,
    setIsEdit,
    setIsFetch,
    setJobList,
    setIsEdited,
    setIsCreated,
    setIsSuccess,
    input,
    setInput,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  const cleanInput = () => {
    return setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_city: "",
      company_image_url: "",
      salary_min: 0,
      salary_max: 0,
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "title":
        setInput({ ...input, title: value });
        break;
      case "job_description":
        setInput({ ...input, job_description: value });
        break;
      case "job_qualification":
        setInput({ ...input, job_qualification: value });
        break;
      case "job_type":
        setInput({ ...input, job_type: value });
        break;
      case "job_tenure":
        setInput({ ...input, job_tenure: value });
        break;
      case "job_status":
        setInput({ ...input, job_status: +value });
        break;
      case "company_name":
        setInput({ ...input, company_name: value });
        break;
      case "company_city":
        setInput({ ...input, company_city: value });
        break;
      case "company_image_url":
        setInput({ ...input, company_image_url: value });
        break;
      case "salary_min":
        setInput({ ...input, salary_min: value });
        break;
      case "salary_max":
        setInput({ ...input, salary_max: value });
        break;
      default:
        return input;
    }
  };
  const { id } = useParams();

  useEffect(() => {
    setJobList([]);
    if (isEdit) {
      (async () => {
        const res = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
        );
        setInput({ ...input, ...res.data });
      })();
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    (async () => {
      const data = { ...input };
      await axios.put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,
        data,
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      );

      setIsEdit(false);
      setIsFetch(true);
      setIsEdited(true);
      setIsSuccess(true);
      navigate("/dashboard/list-job-vacancy");
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { ...input };
    (async () => {
      await axios.post(
        "https://dev-example.sanbercloud.com/api/job-vacancy",
        data,
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      );
      setIsFetch(true);
      setIsCreated(true);
      setIsSuccess(true);
      cleanInput();
      navigate("/dashboard/list-job-vacancy");
    })();
  };

  return (
    <form
      className='w-5/6 sm:w-3/5 mx-auto relative mb-10'
      onSubmit={isEdit ? handleEdit : handleSubmit}>
      <div
        className={closeBtn}
        onClick={() => {
          cleanInput();
          setIsFetch(true);
          setIsEdit(false);
          navigate("/dashboard/list-job-vacancy");
        }}>
        X
      </div>
      <h1 className={loginTitleStyle}>{isEdit ? "Edit" : "Add"} Job</h1>
      <div className={inputCardStyle}>
        <InputRegister
          type='text'
          name='title'
          input={input.title}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='job_description'
          input={input.job_description}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='job_qualification'
          input={input.job_qualification}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='job_type'
          input={input.job_type}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='job_tenure'
          input={input.job_tenure}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='company_name'
          input={input.company_name}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='company_image_url'
          input={input.company_image_url}
          handleChange={handleChange}
        />
        <InputRegister
          type='text'
          name='company_city'
          input={input.company_city}
          handleChange={handleChange}
        />

        <div className='w-4/5 flex justify-between items-center p-2'>
          <label htmlFor='job_status'>Job Status: </label>
          <span>
            <input
              type='radio'
              name='job_status'
              id='job_status'
              value={1}
              checked={input.job_status === 1}
              onChange={handleChange}
            />
            Dibuka
          </span>
          <span>
            <input
              type='radio'
              name='job_status'
              id='job_status'
              value={0}
              checked={input.job_status !== 1}
              onChange={handleChange}
            />
            Ditutup
          </span>
        </div>

        <InputRegister
          type='number'
          name='salary_min'
          input={input.salary_min}
          handleChange={handleChange}
        />
        <InputRegister
          type='number'
          name='salary_max'
          input={input.salary_max}
          handleChange={handleChange}
        />

        <button className='bg-sky-200 py-1 px-6 rounded-xl'>Submit</button>
      </div>
    </form>
  );
}
