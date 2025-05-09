console.log('hello world')

const listOFcollection = document.getElementsByTagName('li')




for(let li of listOFcollection){
    // console.log(li.innerHTML)
}

const classes = document.getElementsByClassName('fruits')
// console.log(classes)

const idk = document.getElementById('fruit');
// console.log(idk)

const fruitsitem = document.querySelectorAll('.fruit-cont li ')
// console.log(fruitsitem)
for(let fr of fruitsitem){
    console.log(fr.innerText)
}
