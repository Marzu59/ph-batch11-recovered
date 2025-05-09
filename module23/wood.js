function EidCollection(pantQuentity, shirtQuentity, shoesQuentity){
    const pantPrice = 600;
    const shirtPrice = 500;
    const shoes = 900;
    const pantTotalPrice = pantPrice * pantQuentity;
    const shirtTotalPrice = shirtPrice * shirtQuentity;
    const shoesTotalPrice = shoes * shoesQuentity;
    const totalPrice = pantTotalPrice + shirtTotalPrice + shoesTotalPrice;
    return totalPrice;

}

const  quentityofItems = EidCollection(2, 2, 3);
console.log(quentityofItems);