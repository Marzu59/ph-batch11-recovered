function findRepeatNumber(number, find){
       let count = 0;
    for(let i = 0;  i < number.length; i++ ){
        
        if(number[i] === find ){
            count++;
           

        }
        
     
        

       }

       return count;
    }


    


const num1 =  [5,6,11,12,98, 5];
const find1 = 5 ;
const find2 = 25;

const numF  = findRepeatNumber(num1, find1);
const numS  = findRepeatNumber(num1, find2);

console.log(numF);
console.log(numS);


