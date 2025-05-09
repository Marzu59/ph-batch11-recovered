const biruyaniKhor =['abul', 'babul', 'kabul', 'bulbul', 'kabul', 'abul', 'babul'];
const number  =[1, 2, 3, 5, 9, 7, 6, 6, 4, 2, 1];

function nodDuplicate(arry){
    const unique = [];
    for(let item of arry){
        if(unique.includes(item) === false){
          unique.push(item)

        }
    }
    return unique;
}

const uniqary = nodDuplicate(biruyaniKhor)

console.log(uniqary)