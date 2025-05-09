// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number){
             if(number % 2 === 0){
                return "even";
             }
             else{
                return "odd";
             }

}

const num1 = odd_even(2);
console.log(num1);


const num2 = odd_even(5);
console.log(num2)