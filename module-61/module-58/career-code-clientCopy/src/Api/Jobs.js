export const jobsApii = ()=>{
     return  fetch('https://career-code-server-copy.vercel.app/api/jobs')
     .then(res=> res.json())
}