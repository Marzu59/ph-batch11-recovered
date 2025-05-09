
// console.log('1')
// setTimeout(()=>{
//     console.log('showing in 5s')
// }, 5000)

// console.log('6')
 






// practice


//   function delaygretting(name, dleayTime){


//  setTimeout(()=>{

//     console.log('hello', name)

//  }, dleayTime)

//   }



//   delaygretting('alice', 2000)



// another paractice


// function telljock(){
//     console.log(' how funny')
// }


//  const twosecfunnymess = setInterval(()=>{

//     telljock()

//   }, 2000)


// setTimeout(()=>{
    
//     clearInterval(twosecfunnymess)
//     console.log('time end for jocking')

// }, 10000)




// another scrip 



  const newdata = async()=>{

    console.log('ami prothom')
    const nwapi = await fetch('https://jsonplaceholder.typicode.com/albums')
    
    const data = await nwapi.json()
    console.log(data)


    console.log('ami last')


  }

  newdata()