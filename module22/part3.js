function oddAvgf(numbers){
     const odds = [];
      for( let number of numbers){
        if(number % 2 === 1){
        //    console.log(number)
        odds.push(number);

        }
      }
    //   console.log(odds)
     let sum = 0;
    for( let numbr of odds){
        sum = sum + numbr;


    }
    const count = odds.length;
    const result = sum / count;
    return result;




}
const every = [40, 43, 58, 65, 71, 82]
const all = oddAvgf(every)
console.log(all)