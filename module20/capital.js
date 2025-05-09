let inputString = "this is an example string";

let capitalizeaWord = inputString.split().map((word)=>word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizeaWord)