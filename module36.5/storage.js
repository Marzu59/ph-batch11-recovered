


const call = ()=>{
     const  person = {
        name: 'hero alam',
        age: 10,
        friends: ['rohim', 'karim']
     }
      const convertedtoString = JSON.stringify(person)
      localStorage.setItem("ALAGIR", convertedtoString)




}

const data = localStorage.getItem("ALAGIR")
const convertd = JSON.parse(data)
console.log(convertd.age)