const  personn = {
    name: 'Hena',
    age: 20,
    profesion: 'Web dev',

}

// console.log(personn['name'])
// console.log(personn)


for(let keyy in personn){
    // console.log(`key: ${keyy} value: ${personn[keyy]}`)
    // console.log(personn[keyy])
    
}


// other way with for of

for(let [ky, value] of Object.entries(personn)){
      
    console.log(`key: ${ky} value: ${value} `)

}
