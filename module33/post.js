const post = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
           displaypost(data)
    })
}



const displaypost = (posts) =>{
    
    const postcontainer = document.getElementById('postContainer')
    
    for( const pst of posts){
          const div = document.createElement('div')
          div.classList.add('card')
          div.innerHTML = `
            
          <h1> ${pst.title} </h1>
          <p>${pst.body} </p>
          <button>details</button>
          
          
          `

          postcontainer.appendChild(div)
       
    }
    
}


post()