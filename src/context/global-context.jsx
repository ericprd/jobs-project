import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isHide, setIsHide] = useState(true);
  const [jobList, setJobList] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [searchParams, setSearchParams] = useState({
    job: "",
    company: "",
    location: "",
  });
  const [input, setInput] = useState({
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

  const contextExport = {
    isHide,
    setIsHide,
    searchParams,
    setSearchParams,
    jobList,
    setJobList,
    isFetch,
    setIsFetch,
    input,
    setInput,
    isLogin,
    setIsLogin,
    isEdit,
    setIsEdit,
    isEdited,
    setIsEdited,
    isSuccess,
    setIsSuccess,
    isDelete,
    setIsDelete,
    isCreated,
    setIsCreated,
  };

  return (
    <GlobalContext.Provider value={contextExport}>
      {props.children}
    </GlobalContext.Provider>
  );
};
