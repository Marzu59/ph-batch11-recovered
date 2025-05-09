let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    let word = Object.keys(myObject);
// console.log(myObject)

for(let ky of word){
    console.log(ky, ':',  myObject[ky], 'type:' , typeof myObject[ky] )
}
