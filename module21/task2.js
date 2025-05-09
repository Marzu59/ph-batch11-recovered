// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(any){
    let newb;
    if(any % 2 === 1){
         newb = any * 2;
    }
    else{
         newb  = any / 2;
    }
    return newb;


}

const final =  number(10);
console.log(final);