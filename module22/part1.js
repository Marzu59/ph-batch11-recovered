function ToinchFeet(inch){
    const feet =  inch / 12;
    const feeetNumber = parseInt(feet);
    const inchRemeaning = inch % 12 ;
    const result = feeetNumber + ' feet ' + inchRemeaning + ' inch.'
    return result;


}

const toInch = ToinchFeet(75);
console.log(toInch);



// miles to kilo
 function kilo(miles){
    const toKilo = miles * 1.60;
    return toKilo
 }

 const mil = kilo(2)
console.log(mil)