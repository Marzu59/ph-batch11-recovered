function maxOf(num1, num2, num3){
    if(num1 > num2 && num1 > num3){

        return 'num1 is king'

    } else if(num3 > num1 && num3 > num2){
        return 'num3 is boss'
    } else{
        return 'num2 is boss'
    }
}
const num1 = 200;
const num2 = 300 ;
const num3 = 190;

console.log(maxOf(num1, num2, num3));
