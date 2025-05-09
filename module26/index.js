function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}

// option 2

const btnNw  = document.getElementById('makeBlue');
btnNw.onclick=  function makebl(){
    document.body.style.backgroundColor = 'blue'
}

// option3
const  pp = document.getElementById('purple');

pp.onclick = ppf;

function ppf(){
 document.body.style.backgroundColor = 'purple'
}

// addEventListener option3

document.getElementById('green-btn').addEventListener('click', function () {
  document.body.style.backgroundColor = 'green' ; 
  console.log('hello')
})

// // another option
// document.addEventListener('DOMContentLoaded', function (){
//     document.getElementById('btn-gray').addEventListener('click', function(){
//         document.body.style.backgroundColor = 'gray'
//     })
// })


document.getElementById('ord').addEventListener('click', function (){
    document.body.style.backgroundColor = 'orange'
})
