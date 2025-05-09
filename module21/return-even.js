// function evenNumbersonly(numbers){
//     const evens = [];
//     for(const number of numbers){
//         if(number % 2 === 0){
//             // console.log(number);

//             evens.push(number);

//         }
//     }
//     return evens;

// }

// const numbers =  [5, 91, 24, 6, 20]
// const fv = evenNumbersonly(numbers)
// console.log(fv)



// sum

function evenNumbersonly(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            // console.log(number);
            sum = sum + number;
           

        }
    }
    return sum;

}

const numbers =  [5, 91, 24, 6, 20]
const fv = evenNumbersonly(numbers)
console.log(fv)