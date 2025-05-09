// const  boxOne = document.getElementById('boxone');


const boxOne = document.querySelectorAll('.boxone')




const right = document.getElementById('right-section')

let mainCount = document.getElementById('maincount')


const taskCards =  document.querySelectorAll('.task-card')

for(const taskCard of taskCards){
    taskCard.addEventListener('click', function(event){
        
        

            event.preventDefault();
           
          const parent = event.target.parentNode.parentNode.parentNode

           const tittle = parent.childNodes[3].innerText

              const newParagrah = document.createElement('p') 
              
                 newParagrah.innerText = tittle;
                 right.append(newParagrah)
                 alert('tittle added')
            
            

            //  for(const boxon of boxOne){

            //     const  oldPText =boxon.querySelector('h2').textContent;
            //     const newP = document.createElement('p')          
              
            //     newP.innerText = oldPText;
                   
            //     right.append(newP)        

            //  }          
            
             
            // alert('text added')
             
        
            //  taskCard.setAttribute('disabled', true)
        
            //  let convertMaincount = parseInt(mainCount.innerText)

            //  let upadteMaincount = convertMaincount - 1 
            
            //  mainCount.innerText = upadteMaincount;
        
        
        })
        

    }













// getBotton.addEventListener('click', function(event){

//     event.preventDefault();

//     const newP = document.createElement('p');
     
//     const  oldPText = boxOne.querySelector('h2').textContent;

//     newP.innerText = oldPText;
     
//     alert('text added')
//      right.append(newP)

//      getBotton.setAttribute('disabled', true)


//      let upadteMaincount = convertMaincount - 1 
    
//      mainCount.innerText = upadteMaincount;


// })





// new way 

// //       if(boxon.contains(taskCard)){

// const  oldPText =boxon.querySelector('h2').textContent;
// const newP = document.createElement('p')          

// newP.innerText = oldPText;
   
// right.append(newP)
// }