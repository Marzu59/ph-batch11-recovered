  // first100 -- 100
   // 101to200 --> 90
   // above200 --> 70

function layerDiscount(quantity){
    const first100price = 100;
    const second100Price = 90;
    const avobe200price = 70;
    
    if(quantity <= 100){
        const total = quantity * first100price
        return total;
    }
        
        else if(quantity <= 200){
            const first100total = 100 * first100price;
            const remainingQuantity = quantity - 100;
            const remaningTotal = remainingQuantity * second100Price;
            const total = first100total + remaningTotal;
            return total;

        }
        else{
            const first100total = 100 * first100price;
            const second100total = 100 * second100Price;
            const remainingQuantity = quantity - 200;
            const remaningTotal = remainingQuantity * avobe200price;
            const total = first100total + second100total +remaningTotal;
            return total;

        }
    
}

const result = layerDiscount(200);
console.log(result)
