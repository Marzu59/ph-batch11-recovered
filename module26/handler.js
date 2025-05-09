

document.getElementById('update').addEventListener('click', function (){
    // console.log('working')
  const head = document.getElementById('tittle');
//   console.log(head)
  head.innerText = ' you are disqualified buddy'

})



// 

document.getElementById('change').addEventListener('click', function(){
    // console.log('update button working')
//  step2 - get text from input field
   
      const nameinput = document.getElementById('inter-name')
        // console.log(nameinput)
        const name = nameinput.value;
        console.log('name', name)
        // set name

        const newName = document.getElementById('updatedName');
        newName.innerText = name;

})