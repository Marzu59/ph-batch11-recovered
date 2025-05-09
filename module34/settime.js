console.log('hi')

let count = 0
 const stp = setInterval(()=>{
      count++
   
    console.log(count)
    if( count >= 5){
        clearInterval(stp)
    }
}, 4000)


console.log('meraba')