import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { jobCardStyle, JobCardTitleStyle } from "../../style/job-vacancy-style";

export default function JobCard() {
  const { jobList, searchParams } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    navigate(`/job-vacancy/${id}`);
  };

  return (
    <>
      {jobList
        //eslint-disable-next-line array-callback-return
        .filter((job) => {
          if (
            job.title.toLowerCase().includes(searchParams.job.toLowerCase()) &&
            job.company_name
              .toLowerCase()
              .includes(searchParams.company.toLowerCase()) &&
            job.company_city
              .toLowerCase()
              .includes(searchParams.location.toLowerCase())
          ) {
            return job;
          }
        })
        .map((job) => (
          <div
            className={jobCardStyle}
            key={job.id}
            onClick={handleClick}
            id={job.id}>
            <img
              src={job.company_image_url}
              alt='company-logo'
              className='basis-1/4 object-contain w-14 pointer-events-none'
            />
            <div className='w-4/5 pr-5 flex flex-col pointer-events-none'>
              <span className={JobCardTitleStyle}>
                {job.title ? job.title : ""}
              </span>
              <span className='truncate text-lg mb-3'>
                {job.company_name ? job.company_name : ""}
              </span>
              <span className='truncate text-sm'>
                {job.company_city ? job.company_city : ""}
              </span>
              <span className='text-xs'>
                <span>
                  Rp. {job.salary_min ? job.salary_min.toLocaleString("id") : 0}
                </span>{" "}
                -{" "}
                <span>
                  {job.salary_max ? job.salary_max.toLocaleString("id") : 0}
                </span>
              </span>
            </div>
          </div>
        ))}
    </>
  );
}
