// const handlUSer = ()=>{

//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data =>console.log(data))
//     .catch(error => console.log('error dhorci'))
// }

const handle =async () =>{
    try{
        const resonse = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await resonse.json()
      console.log(data)
    }
    catch{
        console.log('vul')
    }
      

}

handle()