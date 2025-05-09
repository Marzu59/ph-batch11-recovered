// function tellest(heights){
          
//       let max = heights[0];
//       for(let number of heights){
          
//          if( number > max ){
//              max = number;
//          }

//       }
//            return max;


// }


// const numbers = [50, 20, 60, 90, 100, 40]
// const max = tellest(numbers);
// console.log(max, 'is the largest number in this function')


//minimum number

function lowest(heights){
          
    let min = heights[0];
    for(let number of heights){
        
       if( number < min ){
           min = number;
       }

    }
         return min;


}


const numbers = [50, 20, 60, 90, 100, 40]
const m = lowest(numbers);
console.log(m, 'is the lowest number in this function')