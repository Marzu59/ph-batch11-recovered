import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";

const AddJob = () => {
  const {user} = UseAuth()
  const handleAddJob =(e)=>{
    e.preventDefault();
    const form = e.target;
    const formdataa = new FormData(form);
    const data = Object.fromEntries(formdataa.entries())
   const {min, max, currency, ...newJob} = data;
   
    // process salary Range Data 
      newJob.salaryRange =  { 
             min, max, currency
      }
// process  requirements data 

const requirementsString = newJob.requirements
const dirtyRequirements =requirementsString.split(',')

const cleanRequirements = dirtyRequirements.map(req=> req.trim())
 newJob.requirements = cleanRequirements

// process  responsibilities data 
newJob.responsibilities = newJob.responsibilities.split(',').map(res=> res.trim())

newJob.status = "active";


// console.log(Object.keys(newJob).length)
// console.log(newJob)
  axios.post('https://career-code-server-copy.vercel.app/addjob', newJob)
  .then(res=>{
    if(res.data.insertedId){
      alert('data added to mongodb')
      console.log(res)
    }
  })
  .catch(error=>{
    console.log(error)
  })


  }



  return (
    <div className="">
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic info</legend>

          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Title"
          />

          <label className="label">Company Name</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />
          <label className="label">Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo"
          />
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job type</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value={"on-site"}
              aria-label="on-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value={"remote"}
              aria-label="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value={"hybrid"}
              aria-label="hybrid"
            />
          </div>
        </fieldset>
        {/*  job category*/}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="date" className="input" />
        </fieldset>

        {/* salary range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <label className="label">Minimum Salary </label>
          <input
            type="text"
            className="input"
            name="min"
            placeholder="Minimum Salary"
          />

          <label className="label">Maximum Salary </label>
          <input
            type="text"
            className="input"
            name="max"
            placeholder="Maximum Salary"
          />

          <label className="label">Currency</label>
          <select
            defaultValue="Select Currency"
            name="currency"
            className="select"
          >
            <option disabled={true}>Select Currency</option>
            <option>BDT</option>
            <option>USDT</option>
            <option>BTC</option>
            <option>EU</option>
          </select>
        </fieldset>
        {/* job description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job description</legend>
          <textarea className="textarea" name="description" placeholder="job description"></textarea>
        </fieldset>

          {/* requirement */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>

          <textarea className="textarea" name="requirements" placeholder="Job Requirements"></textarea>
        </fieldset>
        {/* responsability */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsiblity</legend>
          <textarea className="textarea" name="responsibilities" placeholder="Job Responsibility"></textarea>
        </fieldset>
       
        {/* hr */}
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related field</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email" defaultValue={user.email}
            readOnly={true}
            name="hr_email"
            className="input"
            placeholder="HR Email"
          />

          <input type="submit" className="btn btn-primary" value="Add Job" />
        </fieldset>


      </form>
    </div>
  );
};

export default AddJob;
