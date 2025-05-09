const  person = {
    name: 'Hena',
    age: 20,
    profesion: 'Web dev',

}

person.status = 'Error 256'


Object.seal(person)
person.hobby = 'none'

// lock full object
Object.freeze(person)

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))