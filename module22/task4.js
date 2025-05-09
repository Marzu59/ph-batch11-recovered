function longWord(full){
        const part = full.split(" ");
         let leargestWord = "";
    for(let fulls of part){
        if( fulls.length > leargestWord.length){
            leargestWord = fulls;
        }
    }
     return leargestWord;
    

}


 const sample = "I am learning Programming to become a programmer"
console.log(longWord(sample))

