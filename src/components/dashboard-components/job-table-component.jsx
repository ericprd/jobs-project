import axios from "axios";
import Cookies from "js-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/global-context";

export default function JobTableComponent() {
  const {
    setIsFetch,
    jobList,
    setJobList,
    setIsSuccess,
    setIsDelete,
    setIsEdit,
    searchParams,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    setIsEdit(true);
    navigate(`/dashboard/list-job-vacancy/${id}/edit`);
  };

  const handleDelete = (e) => {
    setJobList([]);
    const id = e.target.id;
    (async () => {
      await axios.delete(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      );
      setIsSuccess(true);
      setIsFetch(true);
      setIsDelete(true);
    })();
  };

  return (
    <table className='table-fixed w-full rounded-xl overflow-hidden mx-auto'>
      <thead className='bg-red-200'>
        <tr>
          <th className='py-1'>Job Title</th>
          <th className='py-1'>Company</th>
          <th className='py-1'>City</th>
          <th className='py-1'>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobList
          // eslint-disable-next-line array-callback-return
          .filter((job) => {
            if (
              job.title.toLowerCase().includes(searchParams.job.toLowerCase())
            ) {
              return job;
            }
          })
          .map((job) => (
            <tr
              className='bg-slate-100 border-b last:border-none border-b-slate-300'
              key={job.id}>
              <th className='py-1 px-3 truncate'>{job.title}</th>
              <th className='py-1 px-3 truncate'>{job.company_name}</th>
              <th className='py-1 px-3 truncate'>{job.company_city}</th>
              <th className='py-1 px-3 flex justify-center items-center gap-2'>
                <button onClick={handleClick} id={job.id}>
                  Edit
                </button>
                <button onClick={handleDelete} id={job.id}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
