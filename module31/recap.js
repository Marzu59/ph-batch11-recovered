const productss = [{id: 1, name:"samsung" , color:"black" , brand:"samsungC" , price:1200 },
    { id: 2, name:"iphone" , color:"white" , brand:"apple" , price:3200 },
    { id: 3, name:"opo" , color:"silver" , brand:"oppo" , price:2000 },
    { id: 4, name:"xiomi" , color:"gray" , brand:"xiomi" , price:1500 },

];

const change = productss.map(p=>{
    if(p.brand === "apple"){
        p.price = p.price + 800

    }
    return p

})

// console.log(change)