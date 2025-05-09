// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function  make_avg(ar, size){
            let sum = 0;
            for(let i = 0; i < size; i++ ){
                sum = sum + ar[i];
              
            }
           const average  = sum / size;
           return average;

}

const number = [2, 40, 60, 80];
const size  = number.length;
const result = make_avg(number, size)
console.log(result);



