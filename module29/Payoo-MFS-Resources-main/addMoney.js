document.getElementById('add-money').addEventListener('click', function (event){

    event.preventDefault();

const amont = getinputbyID('amount')
const pinNumber = getinputbyID('pin-number')
// console.log(typeof amont, typeof pinNumber)
// const acount = getinputbyID('account-number')
const acount = document.getElementById('account-number').value

const mainbalInnertex = getmainbalInnertex('main-balance')

const selectBank = document.getElementById('allbank').value;




if(amont < 0){
    alert('gaja khaiso ')
    return
}
   
if(acount.length === 11){
    if(pinNumber == 1234){
        const sum = mainbalInnertex + amont;
        // document.getElementById('main-balance').innerText = sum;
        setInnertxbyIDndValue('main-balance', sum);

        // const p = document.createElement('p');
        // p.innerText = `
        //  added ${amont}  in this ${acount} account
     
        // `
        const transactionContainer = document.getElementById('transaction-container');
        // transactionContainer.appendChild(p);
        const div = document.createElement('div');
        div.classList.add('bg-gray-600')
        div.innerHTML = `
          </h1> added money form ${selectBank}  </h1>
          <h2>amount ${amont}</h2>
          <h3>accout Number ${acount}</h3>
        
        
        `
        transactionContainer.appendChild(div);



    }
    else{
        console.log('pin thik nai')
    }
        
}
else{
    console.log('acount thik nai')
}






})