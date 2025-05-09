function sumofNumbers(num){
    // console.log(num) 
        let sum = 0;
     for(const number of num){
        console.log(number)
       sum = sum + number;
     }
   return sum;

}


const nums = [54, 71, 76, 88];
const sums = sumofNumbers(nums);
console.log('sum of numbers', sums)

