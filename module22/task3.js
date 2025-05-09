function vowel(allvowel){
           let count = 0;
           let voweAll = 'AaEeIiOoUu'
    for(let i = 0; i < allvowel.length; i++  ){
           
        if(voweAll.includes(allvowel[i])){

            count++;
        }
    }
    return count;

}


const  letter = 'Ami coffe khai'
const filter = vowel(letter)
console.log(filter)