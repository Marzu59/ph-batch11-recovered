const mobile = {
    brand: 'samsung',
    price: '2500',
    color: 'blue',
    camera: '12mp',
    isNew: 'true',

}
// console.log(mobile)

// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }


const keys = Object.keys(mobile);
console.log(keys);

for (const ky of keys){
    console.log(ky,':' , mobile[ky]);
}