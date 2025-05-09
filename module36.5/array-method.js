const products = [
    {name: "Sam", brand:"xiomi", price:"2000", color:"black"},
    {name: "nat", brand:"honor", price:"2000", color:"white"},
    {name: "realme", brand:"Realme", price:"3000", color:"white"},
    {name: "Sam2", brand:"xiomi", price:"4000", color:"black"},
    {name: "redmi", brand:"xiomi", price:"2000", color:"white"},
    {name: "realme", brand:"htc", price:"2002", color:"black"},
]

const rsult = products.map(product => product.price)
// console.log(rsult)

// products.forEach(product=>)

    const result = products.filter(product=>product.brand === "xiomi")
    // console.log(result)

    const rsst = products.filter(product=>product.price>=2002)
    // console.log(rsst)



    const findAny =  products.find(product=> product.name === "realme")
    // console.log(findAny)