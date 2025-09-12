export  const  myApplicationPromise = (email, accessToken)=>{
    return fetch(`https://career-code-server-copy.vercel.app/applications?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
 }