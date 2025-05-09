function isLeapyear(year){
 if(year % 100 !== 0 && year % 4 === 0 ){
    return true;
 }
  else if(year % 100 === 0  && year % 400 === 0){
    return true;
 }
 else{
    return false;
 }


}

const firstYear = isLeapyear(2100);
const secondyear = isLeapyear(2026);
const thirdYear = isLeapyear(2400);



console.log(firstYear, secondyear, thirdYear);