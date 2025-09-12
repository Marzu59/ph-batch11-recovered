  export  const JobCreatedbyPromise =(email, accessToken)=>{
        return fetch(`https://career-code-server-copy.vercel.app/jobss?email=${email}`, {
          headers: {
            authorization: ` Bearer ${accessToken} `
          }
        })
        .then(res=>res.json())
    }