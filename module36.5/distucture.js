
const friends = ["hero Alam", "Hena", "Azad"]

const [element1, elemant3, elment] = friends;
// console.log(elment)

// object

// const person ={
//     name:"Masud",
//     age: 25, 
//     profesion: "Teacher"
// }



// const {name, profesion}= person;
// console.log(profesion)



// json

const person ={
    name:"Masud",
    age: 25, 
    profesion: "Teacher"
}

const jsonData = JSON.stringify(person)
// console.log(jsonData)

const jsonPlandata =  JSON.parse(jsonData)
// console.log(jsonPlandata)

// /



const keyss = Object.keys(person)
// console.log(keyss)
const valuee = Object.values(person)
// console.log(valuee)