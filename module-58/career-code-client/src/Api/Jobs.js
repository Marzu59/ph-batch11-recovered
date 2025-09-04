export const jobsApii = ()=>{
     return  fetch('http://localhost:3000/jobs', {credentials: 'include'}).then(res=> res.json())
}