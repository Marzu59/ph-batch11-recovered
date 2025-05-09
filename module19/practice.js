
// for(let odd = 61; odd <=100; odd++){
//     // console.log(odd)
//     if(odd % 2 ===1 ){
//         console.log('egula bejor', odd);
//     }

// }









// let odd= 21;

// while(odd >= 15){
// console.log(odd)
//     odd--;
// }








// for(let odd = 81; odd <= 131; odd++){
   
//     if(odd % 2 !== 0){
//         console.log('bejor sonkha', odd)
//     }
    

// }



// 3 ba 5  diye bivajjo  sonkha gulo


// for(let odd = 81; odd <= 131; odd++){
   
//     if(odd % 3 === 0 || odd % 5 ===0){
//         console.log('bejor sonkha', odd)
//     }
    

// }



// 3 and 5  diye bivajjo  sonkha gulo

let total = 0;
for(let odd = 81; odd <= 131; odd++){
   
    if(odd % 3 === 0 && odd % 5 === 0){
        // console.log('bejor sonkha', odd)

        total = total + odd;
        console.log("total", total)
    }
    

}
console.log('total of the number', total)