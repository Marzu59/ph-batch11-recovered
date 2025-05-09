const products = [
    {name: "Sam", brand:"xiomi", price:"2000", color:"black"},
    {name: "nat", brand:"honor", price:"2000", color:"white"},
    {name: "realme", brand:"Realme", price:"3000", color:"white"},
    {name: "Sam2", brand:"xiomi", price:"4000", color:"black"},
    {name: "redmi", brand:"xiomi", price:"2000", color:"white"},
    {name: "realme", brand:"htc", price:"2002", color:"black"},
]


const newObj = {
    name:"Htc",
    brand: "HTC",
    price: 50000,
    color: "White"
}

const newArray = [...products,newObj]
// console.log(newArray)

const remainningProducts = products.filter(product=>product.brand !=="xiomi")
// console.log(remainningProducts)

const anotherArray = [...remainningProducts, newObj ]
// console.log(anotherArray)