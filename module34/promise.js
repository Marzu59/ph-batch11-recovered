
// const fet = () =>{
//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(res=> res.json())
//    .then(data=> console.log(data))
//    .catch(error => console.log(error))

// }

// fet()














// another way

// const loadData =() =>{
//      return new Promise ((resolve,reject)=>{

//                  const staus = true;
//                  if(staus  === true){
//                     resolve({name: 'hero'})
//                  }
                 
//                  else{
//                     reject("server error")
//                  }


//     })



// }


// loadData()
// .then(res=> console.log(res))
// .catch(error=>console.log(error))





// another promise way 

// const loadData =() =>{
//    return new Promise ((resolve,reject)=>{

//                const staus = true;
//                if(staus  === true){
//                   const mock = {
//                      json: ()=>  Promise.resolve({name: 'hero'})
          
                  
//                }
//                resolve(mock)
//             }
               
//                else{
//                   reject("server error")
//                }
//             }

//   )



// }


// loadData()
// .then(res=> res.json())
// .then(data=> console.log(data))
// .catch(error=>console.log(error))








// promise all 

const urls = [
   'https://jsonplaceholder.typicode.com/users',
   'https://jsonplaceholder.typicode.com/todos',
   'https://jsonplaceholder.typicode.com/comments'
]

Promise.all(urls.map(url =>{
   return fetch(url).then(res=> res.json()).then(data => data)
}))

.then(res=> res)
.then(data=> console.log(data))
.catch(err => console.log(err))