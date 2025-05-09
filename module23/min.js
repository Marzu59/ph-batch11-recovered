

function cheapestPhone(phones){

          let min = phones[0];
    for(let phone of phones ){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;

}



const mobile = [
    { name : 'samsung', price: 30000 },
    { name : 'oppo', price: 20000 },
    { name : 'iphone', price: 25000 },
    { name : 'MI', price: 20800 },
]

console.log(cheapestPhone(mobile), 'its a cheapest phone')