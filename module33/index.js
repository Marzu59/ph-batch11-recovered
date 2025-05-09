const newLoadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(ress => ress.json())
    .then(data => showuser(data))
}





const showuser =(giveme)=>{

    const findUl = document.getElementById('users')

    for(let give of giveme ){
         
        const li = document.createElement('li')
        li.innerText = give.name
        findUl.appendChild(li)
    }
    

}