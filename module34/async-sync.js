

const loaddata = async()=>{

try{
    console.log('ami prothom')



const respons = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  console.log(respons)

const data = await respons.json()
// console.log(data)



 
console.log('ami last')
}

catch{
    console.log('erroddddr hoyce')
}


}
loaddata()




// for normal function

// async function fetchdata(){

//     const response = await fetch('')
//     const  data = await response.json()
//     // console.log(data)

// }
