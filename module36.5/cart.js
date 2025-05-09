const handleAddtoCart = ()=>{

    const prodNam = document.getElementById('productName')
    const produquantity = document.getElementById('productquentity')
    const  name = prodNam.value;
    const  quentity = produquantity.value;
        
    saveProductTolocalstorage(name, quentity)
    // handletolocalstoreage(name, quentity)
    displayProduct(name, quentity)
    prodNam.value = ""
    produquantity.value = ""
}

const displayProduct = (productnam, quantity)=>{
     const productContainer = document.getElementById('product-Container')
     const li = document.createElement('li')
     li.innerText = ` ${productnam}:${quantity}
     `

     productContainer.appendChild(li)
}



// function handletolocalstoreage(productnam, quantity){
//     const newProduct = {name: quantity}
//   const lo =  localStorage.setItem("cart",JSON.stringify(newProduct))

// }







function getProductsFromlocalstorage(){
    let cart = {};
    const getProduct = localStorage.getItem("cart")
   
    if(getProduct){
        cart =  JSON.parse(getProduct)
    }
    return cart;                    


}






const saveProductTolocalstorage = (productname, quantity)=>{
    const cartt = getProductsFromlocalstorage()
    cartt[productname] = quantity;
    const cartStringify = JSON.stringify(cartt)
    localStorage.setItem("cart", cartStringify)
}




function displayProductFromlocalStorage(){
    const products = getProductsFromlocalstorage()
    for(let product in products){
        // console.log(product)
        // console.log(products[product])
        displayProduct(product, products[product])
    }
}
displayProductFromlocalStorage()


