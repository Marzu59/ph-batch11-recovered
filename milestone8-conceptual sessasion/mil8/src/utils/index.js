import toast from "react-hot-toast";



export const getFavorites = ()=>{
 const  favorites = localStorage.getItem('favorites');
 if(favorites) return JSON.parse(favorites)
  return []

}

export const addfavorite = (phone)=>{
    const favoritess = getFavorites()
    // console.log(favoritess)
    
    const isExist = favoritess.find(p=> p.id === phone.id)
    // console.log(isExist)
  
    if(isExist) return;
    favoritess.push(phone)
    toast.success('Successfully added to bookmark')
    localStorage.setItem('favorites', JSON.stringify(favoritess))

 

}


export const  removeFavorite =(id)=>{
  // console.log(id)
  const favorites = getFavorites()
  const remeaningphones = favorites.filter(phone=> phone.id !== id)
  localStorage.setItem('favorites', JSON.stringify(remeaningphones))
  toast.error('Successfully deleted from bookmark')


}


//cart






export const getCarts = ()=>{
  const  carts = localStorage.getItem('carts');
  if(carts) return JSON.parse(carts)
   return []
 
 }
 
 export const addcart = (phone)=>{
     const cart = getCarts()
     
     
     const isExist = cart.find(p=> p.id === phone.id)
     // console.log(isExist)
   
     if(isExist) return;
     cart.push(phone)
     toast.success('Successfully added to Cart')
     localStorage.setItem('carts', JSON.stringify(cart))
 
  
 
 }
 
 
 export const  removeCart =(id)=>{
   // console.log(id)
   const carts = getCarts()
   const remeaningphones = carts.filter(phone=> phone.id !== id)
   localStorage.setItem('carts', JSON.stringify(remeaningphones))
   toast.error('Removed this phone from Cart')
 
 }