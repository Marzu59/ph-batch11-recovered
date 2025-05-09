const heights2 = [110, 190, 160, 165, 137];

function getLowest(numbers){
      let digit = numbers[0]

    for(let number of numbers){
       
        if( digit > number ){
            digit = number;
        }
    }
    return digit;

}

const low = getLowest(heights2);
console.log(low)