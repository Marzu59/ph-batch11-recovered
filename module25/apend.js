// whare to be add
const placelist = document.getElementById('place-list')
console.log(placelist)

// what to add
const newLi = document.createElement('li');
newLi.innerText = 'Pahar toli bon'

// add the child 
placelist.appendChild(newLi)

// where to add
const coin = document.getElementById('main-contin')

const section =  document.createElement('section')

const h11 = document.createElement('h1')
h11.innerText = 'my new list'
section.appendChild(h11)

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);

section.appendChild(ul)
coin.appendChild(section)


// another way

const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> My dres sectin</h1>
<ul>
<li>lungi</li>
<li>lu</li>
</ul>

`

coin.appendChild(sectionDress);