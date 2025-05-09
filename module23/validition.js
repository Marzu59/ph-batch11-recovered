// function multiply(num1, num2){
//     if( typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'please provide a number'
//     }

//     const mult = num1 * num2;
//     return mult; 
// }


// const result = multiply('five', 'seven');
// console.log(result);






// another 
// function fullName(first, second){
//  if(typeof first !== 'string'){
//     return 'please provide a name'
//  }
//  else if(typeof second !== 'string'){
//     return 'please provide A name'
//  }

//     const full = first + ' ' + second;
//     return full
// }

// const name  = fullName('Akmal', 5);
// console.log(name);




//another
function getPricef(product){
     if(typeof product !== "object"){
        return 'please use object'
     }
    const price = product.price;
    return price;
}

// const price = getPricef({name: 'chulkanir dandi', price: 35, colors: 'blue' })
// const price = getPricef(5)
// console.log(price)


function arryiNNumber(num){
 if(Array.isArray(num)  === false ){
    return 'please use number into array'
 }

    const second = num[1];
    return second
    

}

const second = arryiNNumber(220)
console.log(second)