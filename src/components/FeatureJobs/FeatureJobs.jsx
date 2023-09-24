import { useEffect, useState } from "react";
import Job from "../Job/Job";




const FeatureJobs = () => {
  const [jobs, setjobs] = useState([])

  const [dataLength,setDataLength]=useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setjobs(data))
  }, [])
  return (
    <div>
      <div>
        <h2 className='text-center text-5xl'>Featured Jobs{jobs.length}</h2>
        <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
          jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength ===jobs.length && 'hidden'}>
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary"> Show All</button>
      </div>
    </div>
  );
};

export default FeatureJobs;