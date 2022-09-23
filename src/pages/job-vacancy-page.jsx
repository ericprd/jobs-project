import axios from "axios";
import { useContext, useEffect } from "react";
import JobList from "../components/job-vacancy-components/job-list";
import Search from "../components/landing-page-components/search";
import { GlobalContext } from "../context/global-context";
import { jobVacancyStyle } from "../style/job-vacancy-style";

export default function JobVacancy() {
  const { isFetch, setIsFetch, jobList, setJobList } =
    useContext(GlobalContext);

  useEffect(() => {
    if (isFetch) {
      (async () => {
        const res = await axios.get(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        const { data } = res.data;
        setJobList([...jobList, ...data]);
        setIsFetch(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetch]);

  return (
    <div>
      <div className={jobVacancyStyle}>
        <Search />
      </div>
      {jobList.length > 0 ? (
        <JobList />
      ) : (
        <div className='w-full mt-60 overflow-y-hidden flex justify-center items-center'>
          <p className='text-4xl'>Tidak ada lowongan</p>
        </div>
      )}
    </div>
  );
}
