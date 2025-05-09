function cashOut(money){
    if( typeof money !== 'number'  ){
        return 'Invalid'
    }



    const percentege = 1.75;
    const charge = money * percentege / 100;
    return charge;

 
}
 
// const co  = cashOut('two thousend')
// console.log(co)

// assignment task2--

function validEmail(email){
if( typeof email !== 'string'){
    return 'Invalid'
}    
if(email[0] == '.' || email[0] == '-' || email[0] == '_' || email[0] == '+' || email[0] == '@' || email[0] == ' ' ){
    return false;
}
else if( !email.includes('@')   ){
    return false;
}
else if( !email.endsWith('.com')   ){
    return false;
}
else if( email.includes(' ') ){
    return false;
}


else{
    return true;
}

}


// const mail = 'nazmul28@gmail.com'
// console.log(validEmail(mail))



// assignment task3 


function electionResult(array){
    if(!Array.isArray(array)){
        return 'Invalid'
    }

     let count1 = 0;
     let count2 = 0;
    for(let arr of array){

          
        if( arr === "mango" ){
            count1++;
        }
        else if(arr === "banana"){
            count2++;
        }


    }
    if( count1 > count2 ){
        return 'mango'
    }
    else if(count2 > count1){
        return 'banana'
    }
    else if( count1 == count2){
        return 'draw'
    }

  

}

// const allVote =  ["mango", "banana", "Na-Vote", "mango"]


// const  all = electionResult(allVote);
// console.log(all)


// task4


function  isBestFriend(friend1, friend2){
    if( typeof friend1 !== 'object' || typeof friend2 !== 'object') {
        return 'Invalid'
    } 
    
    if( friend1.bestFriend == friend2.roll  && friend2.bestFriend == friend1.roll ){
        return true
    }
   

    else{
        return false;
    }



}

// const f1 = "name: Alif, roll: 1, bestFriend: 2" 
// const f2 = " name: Ahmed, roll: 2, bestFriend: 1"

// const f1 = {name: "Alif", roll: 1, bestFriend: 2 }
// const f2 = {name: "Ahmed", roll: 2, bestFriend: 1}

// const both = isBestFriend(f1, f2);
// console.log(both)


function calculateWatchTime(ary){
     for(let singleAryElemnt of ary){
        if( typeof singleAryElemnt !== 'number' ){
            return 'Invalid'
        }
     }


        let sumSecond = 0;

    for( let number of ary){
        sumSecond = sumSecond + number;

    }

     let totalHrs = Math.trunc(sumSecond / 3600);
     let min = Math.trunc((sumSecond % 3600) / 60);
     let secondsRemenaning =  sumSecond % 60;
     return { hour: totalHrs, minute: min, second: secondsRemenaning };
     
    
    

   
    




}


const second = [1000, 20, 100]
const secondInput = calculateWatchTime(second)
console.log(secondInput);