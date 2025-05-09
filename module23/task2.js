const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestFind(names){
    let smallest = names[0]
    for(let name of names){
        
        if(smallest.length > name.length){
             smallest = name
        }


    }
return smallest;

}

const allName = smallestFind(heights2);
console.log(allName)