// const moreapi = () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data =>{
//        console.log(data)
//     })
// }




const moreapi = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>{
       displayUi(data)
    })
}


const displayUi = (passTOme) =>{
    console.log(passTOme)

}