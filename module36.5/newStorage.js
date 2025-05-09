function handletoStorage(){
    
    const name = document.getElementById('name').value 
    const email = document.getElementById('email').value 
    const data = {name, email}
    localStorage.setItem(email, JSON.stringify(data)) 
    
}

const storeditem = localStorage.getItem("jhon320k@gmail.com")
// console.log(JSON.parse(storeditem))

const cleard=()=>{
    localStorage.clear()
}




