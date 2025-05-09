// const sentence = 'i am beginer'

// for(const letter of sentence ){
//     console.log(letter);
// }




const sentence = 'i am beginer'
let reverse = ''
for(const letter of sentence ){
    reverse = letter + reverse 
}

console.log(reverse)