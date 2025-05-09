const numbers = [200, 600, 400, 400];
const products =[
     { name : 'shampo', price : 300, q: 2 },
     { name : 'glass', price : 200,  q: 2 },
     { name : 'mahedi', price : 400,  q: 2 },
     { name : 'gel', price : 500,  q: 2 },


]

function getShoppingTotal(products){
            let total = 0;
    for(let product of products ){
        let everCost = product.price * product.q;
        total = total + everCost;

    }
    return total;

}

const total = getShoppingTotal(products);
console.log(total);