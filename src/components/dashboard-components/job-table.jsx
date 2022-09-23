import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global-context";
import JobTableComponent from "./job-table-component";

export default function JobTable() {
  const {
    jobList,
    setJobList,
    isFetch,
    setIsFetch,
    isSuccess,
    setIsSuccess,
    isEdited,
    setIsEdited,
    isCreated,
    setIsCreated,
    isDelete,
    setIsDelete,
    searchParams,
    setSearchParams,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (isFetch) {
      (async () => {
        const res = await axios.get(
          "https://dev-example.sanbercloud.com/api/job-vacancy"
        );
        setJobList([...jobList, ...res.data.data]);
        setIsFetch(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetch]);

  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSearchParams({ ...searchParams, job: input });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='relative max-w-4xl  mx-auto mt-40 basis-11/12 sm:basis-8/12 self-start'>
      {isSuccess && (
        <p className='absolute flex bg-green-200 w-fit py-1 px-5 -top-20 right-60 rounded-3xl'>
          {isDelete && <p>Berhasil menghapus Lowongan</p>}
          {isCreated && <p>Berhasil membuat Lowongan</p>}
          {isEdited && <p>Berhasil update lowongan</p>}
          <span
            className='ml-4 border border-black/30 px-1 cursor-pointer inline-block rounded-lg'
            onClick={() => setIsSuccess(false)}>
            x
          </span>
          {(() => {
            let time = new Date().getTime();
            const stop = time + 2;
            setInterval(() => {
              time++;
              if (time === stop) {
                setIsSuccess(false);
                setIsDelete(false);
                setIsCreated(false);
                setIsEdited(false);
              }
            }, 1000);
          })()}
        </p>
      )}
      <>
        <div className='mb-10'>
          <input
            type='text'
            placeholder='search..'
            className='w-2/5 border border-slate-100 px-5 mr-5 focus:outline-none rounded-lg'
            value={input}
            onChange={handleChange}
          />
          <input
            type='submit'
            value='Cari'
            className='bg-red-100 rounded-md px-3 cursor-pointer'
            onClick={handleClick}
          />
        </div>
        <JobTableComponent />
      </>
    </div>
  );
}
