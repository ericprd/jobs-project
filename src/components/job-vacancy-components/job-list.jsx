import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import { jobListStyle } from "../../style/job-vacancy-style";
import JobCard from "./job-card";

export default function JobList() {
  const { jobList } = useContext(GlobalContext);

  return <div className={jobListStyle}>{jobList && <JobCard />}</div>;
}
