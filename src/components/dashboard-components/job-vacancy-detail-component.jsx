/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";
import { closeBtn } from "../../style/input-style";

export default function JobVacancyDetail() {
  const { setJobList, isFetch, setIsFetch } = useContext(GlobalContext);

  const [job, setJob] = useState({
    salary_min: 0,
    salary_max: 0,
  });

  const { id } = useParams();

  let statusStyle = "mr-3 rounded-xl px-2 text-xs";

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
      );
      setJob({ ...job, ...res.data });
      setIsFetch(true);
    })();
    setJobList([]);
  }, [isFetch]);

  return (
    <div className='w-full mx-auto pt-10 overflow-y-scroll my-20 relative'>
      <div className='max-w-[40rem] mx-auto'>
        <Link
          to='/job-vacancy'
          onClick={() => {
            setJob({ salary_min: 0, salary_max: 0 });
            setIsFetch(true);
          }}
          className={closeBtn}>
          X
        </Link>
        <div className='flex flex-col sm:flex-row gap-10 mt-5 mb-10 mx-auto max-w-lg justify-center items-center sm:justify-start sm:items-start'>
          <img
            src={job.company_image_url}
            alt='company logo'
            className='w-full h-48 sm:max-h-32 sm:max-w-[4rem] object-scale-down'
          />
          <div>
            <p className='text-3xl'>{job.title ? job.title : ""}</p>
            <p className='text-xl'>
              {job.company_name ? job.company_name : ""}
            </p>
            <p className='text-sm'>
              {job.company_city ? job.company_city : ""}
            </p>
            <p className='text-xs'>
              <span>
                Rp. {job.salary_min ? job.salary_min.toLocaleString("id") : 0}
              </span>{" "}
              -
              <span>
                Rp. {job.salary_max ? job.salary_max.toLocaleString("id") : 0}
              </span>
            </p>
            <p>
              <span
                className={
                  statusStyle +
                  (job.job_status ? " bg-green-200" : " bg-red-200")
                }>
                {job.job_status ? "Dibuka" : "Ditutup"}
              </span>
              <span className='mr-3 rounded-xl bg-slate-400 px-2 text-xs'>
                {job.job_type ? job.job_type : ""}
              </span>
              <span className='rounded-xl bg-slate-400 px-2 text-xs'>
                {job.job_tenure ? job.job_tenure : ""}
              </span>
            </p>
          </div>
        </div>
        <div className='w-4/5 mx-auto'>
          <p className='text-lg mb-1'>What will you do:</p>
          <p className='mb-5'>
            {job.job_description ? job.job_description : ""}
          </p>
          <p className='text-lg mb-1'>Qualifications:</p>
          <p className=''>
            {job.job_qualification ? job.job_qualification : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
