
const getCardformloclstorage = ()=>{
   const storageString = localStorage.getItem('cart')
    if(storageString){
        const storedCart = JSON.parse(storageString)
        return storedCart
    }
    return []
}


const savecardtoloclstorage = (cart)=>{
    const cartstringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartstringified)

}

const additemtoCardLocalsotrage = (id)=>{
    const cart = getCardformloclstorage();
    cart.push(id)
    savecardtoloclstorage(cart)

}


const removeFRomlocalstorage =(id)=>{
    const storedcart = getCardformloclstorage()
    const remainningcard= storedcart.filter(storedId => storedId !== id)
    savecardtoloclstorage(remainningcard)
}
export {getCardformloclstorage, additemtoCardLocalsotrage,removeFRomlocalstorage}