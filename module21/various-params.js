function evensizeString(str){
     
    const size = str.length
    console.log(str, size)
    if(size % 2 === 0){
        console.log('even size' )
        return true
    } else{
        console.log('odd size')
        return false;
    }



}

// evensizeString('Dhaka')
// evensizeString('faka')


console.log(evensizeString('Dhaka'));
console.log(evensizeString('faka'));


