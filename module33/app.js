const person = {

    name: 'hena',
    age: 10,
    status: true,
    friends: ["hero Alam", "Masud"],
}
// console.log(person)

const newPErson = JSON.stringify(person)
// console.log(newPErson)

const oldconvert = JSON.parse(newPErson)
// console.log(oldconvert)