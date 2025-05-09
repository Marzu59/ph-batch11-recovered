const products = [{id: 1, name:"samsung" , color:"black" , brand:"samsungC" , price:1200 },
                 { id: 2, name:"iphone" , color:"white" , brand:"apple" , price:3200 },
                 { id: 3, name:"opo" , color:"silver" , brand:"oppo" , price:2000 },
                 { id: 4, name:"xiomi" , color:"gray" , brand:"xiomi" , price:1500 },

];

// ForEach

// products.forEach(mal =>{
//     if(mal.color == "black"){
//         console.log(mal)
//     }
// })


// filtering
const filteringProducts = products.filter(product=> product.price > 1500);
// console.log(filteringProducts)

const newProducts = products.filter(p=> p.id != 4);
// console.log(newProducts)


// find 

const findOne = products.find(p=> p.price > 1200)
// console.log(findOne)