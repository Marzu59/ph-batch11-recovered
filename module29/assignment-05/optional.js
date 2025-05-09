
const date = new Date();

const  day = date.getDate()

const months = [
    "january", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

const findmonth = months[date.getMonth()]

const year = date.getFullYear();

const fullDate = ` ${day} ${findmonth} ${year}  `


document.getElementById('date').innerText = fullDate;




// weekPart


const dateTime = new Date();
const thisDayNum = dateTime.getDay()


const week = ['sun', 'mon', 'tus', 'wed', 'thus', 'Fri', 'sat']

const ajkeKibar = week[thisDayNum]


// console.log(day)
document.getElementById('today').innerText = ajkeKibar





// color part



const colors = ['red', 'blue', 'black', 'white',  'gray', 'orange', 'green', 'yellow', 'purple']



document.getElementById('random-color').addEventListener('click', function(){
    const random = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = random;
})




