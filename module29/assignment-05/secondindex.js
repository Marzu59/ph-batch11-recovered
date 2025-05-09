
const boxOne = document.querySelectorAll('.boxone')
const righSection = document.getElementById('right-section')

const mainCount = document.getElementById('maincount')
const navCount = document.getElementById('navcount')


// all button
const allbutton = document.querySelectorAll('.task-card')

for(let buttonSingle of allbutton){

     buttonSingle.addEventListener('click', function(event){
           event.preventDefault();

           
           const tittleParent = event.target.parentNode.parentNode.parentNode
           const  tittle = tittleParent.childNodes[3].innerText

           const newP = document.createElement('p')
           newP.innerText = tittle;

           righSection.setAttribute("style", "gap: 5px")

           newP.setAttribute("style","background-color: #F4F7FF; border; border-white; padding: 2px ; margin-top: 3px;")


           righSection.append(newP)
           



     let convertMaincount = parseInt(mainCount.innerText)
     
      let upadteMaincount = convertMaincount - 1
      mainCount.innerText = upadteMaincount

            

      let convertNavCount = parseInt(navCount.innerText)
      let updateNavCount = convertNavCount + 1
       navCount.innerText = updateNavCount;

    alert('clicked')



     })

}



// 
const rigtbtn = document.getElementById('clear-btn')

rigtbtn.addEventListener('click', function(){
      
     righSection.innerHTML = '';


})