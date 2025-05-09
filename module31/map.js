const numbers = [1, 2, 3, 4, 5]

let tem =[]

for(let index = 0 ; index < numbers.length ; index++){
    const element = numbers[index]

    const  sum = element + 1
     tem.push(sum)
   
} 
// console.log(tem)



const neww =  numbers.map(num => num+1)  
// console.log(neww)




// for multiple line

// const brothers = ['karim', 'rahim', 'Asif']
// const brother = brothers.map(bro =>{
//     return bro
// })
// console.log(brother)