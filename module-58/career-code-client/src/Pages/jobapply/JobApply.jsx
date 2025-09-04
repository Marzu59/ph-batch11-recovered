import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";

const JobApply = () => {
  const { id: jobId } = useParams();
  console.log(jobId);
  const { user } = UseAuth();
  console.log(user.email);

  const handleApply =(e)=>{
    e.preventDefault()
    const form = e.target 
     const linkedin = form.linkedin.value
     const github = form.github.value
     const resume = form.resume.value

     const application = {
        jobId,
        applicant: user.email,
        linkedin, github, resume
     }
     axios.post('http://localhost:3000/applications', application)
     .then(res=>{
        console.log(res.data)
     })
     .catch(error=>{
        console.log(error)

     })


  }

  return (
    <div>
      <h1>Apply for a job</h1>

      <form onSubmit={handleApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Linkdin Link</label>
          <input type="url" name="linkedin" className="input" placeholder="LinkedIn Profile link" />

          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="Github Profile link" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="Resume link" />
          <input type="submit" className="btn" value="Apply" name="" id="" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
