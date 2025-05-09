

function loadcategories() {

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displaycategories(data.categories))


}


const loadCategoriesVideos =(id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `

  document.querySelectorAll('#category-continer button').forEach((btn) => {
    btn.classList.remove('active');
});

  // console.log(url)
  fetch(url)
  .then((resp)=> resp.json())
  .then((data)=>{
     const clickbutton = document.getElementById(`${id}`)
     clickbutton.classList.add('active')
    displayvideos(data.category)
    
  })
    

}


const loadVideodetails = (videoID) =>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoID}`
    fetch(url)
     .then((res)=> res.json())
     .then((data)=> displayvideodetails(data.video))

}
const displayvideodetails = (video)=>{
        document.getElementById('videodetailss').showModal()
       const detailscontiner = document.getElementById('details-container');
       detailscontiner.innerHTML = ` <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div> `
        
}

function displaycategories(categories) {
    // console.log(categories)
    //   get the continer
    const categoryCointainer = document.getElementById('category-continer')
   
    categories.forEach((cat) => {
        categoryCointainer.innerHTML += `
             <button id="${ cat.category_id }" onclick="loadCategoriesVideos(${ cat.category_id })" class="btn btn-sm"> ${ cat.category } </button>

        `
    })
}




function loadvideos(search = "") {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`)
        .then(res => res.json())
        .then(data => displayvideos(data.videos))

}

const displayvideos = (videoss) => {  
    const contianerVideo = document.getElementById('video-continer')
         contianerVideo.innerHTML = ""

  if(videoss.length === 0){
      contianerVideo.innerHTML = `<div class="flex flex-col col-span-full items-center justify-center  text-center ">
        <!-- Video Icon -->
        <div class="text-6xl text-gray-500">
            <img src="./ph-tube-resources-main/Icon.png" alt="">
        </div>
        <!-- Message -->
        <p class="mt-4 text-lg text-gray-600">Oh, Sorry. There is no video content.</p>
    </div>
      `
  }

    videoss.forEach(video => {
        //   console.log(video)
        const videoCard = document.createElement('div')
        videoCard.innerHTML = `
 <div class="card bg-base-100  ">
        <figure class="relative ">
          <img class="w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />


            <span class="absolute bottom-2  right-2 text-white bg-black text-sm rounded-sm p-1">3hrs 56 min ago</span>
        </figure>
        <div class=" flex gap-3 py-5">
          
            <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 px-0 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
            </div>

            <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="text-sm text-gray-600 flex">${video.authors[0].profile_name}  
                ${video.authors[0].verified === true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt=""/>` : ``} </p>
                <p class="text-sm text-gray-600">${video.others.views} views</p>
                
            </div>
             
        </div>
        <button onclick="loadVideodetails('${video.video_id}')" class="btn btn-block">Show details</button>
      </div>
            
            `
        contianerVideo.append(videoCard)


    })



}


document.getElementById('searchinput').addEventListener('keyup', (e)=>{
     
  const input = e.target.value;
  // console.log(input)
  loadvideos(input)




})


loadcategories()






















