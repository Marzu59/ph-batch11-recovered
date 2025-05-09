
document.getElementById('cashout').addEventListener('click', function (event){
    
    event.preventDefault();
      const accountNumber = document.getElementById('account-number').value;

      const amount = getinputbyID('cashout-amount')
      const pin =getinputbyID('cashout-pin')
      const mainBalance = getmainbalInnertex('main-balance')


      if(amount > mainBalance){
        alert('tk to besi nai aabar jor korteco keno besi tk tuler jonno')
        return
      }

      if(accountNumber.length === 11){
           
      if(pin === 1234){
        const sum = mainBalance - amount;
           setInnertxbyIDndValue('main-balance', sum)

           const p = document.createElement('p');
        p.innerText = `
         cashout  ${amount}  from this ${accountNumber} account
     
        `
        const transactionContainer = document.getElementById('transaction-container');
        transactionContainer.appendChild(p);


                    



                  }
                    

      }
           else{
            console.log('invalid account number')
           }


})




























// document.getElementById('cashout-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//    const pin =  document.getElementById('cashout-pin').value;
//     const convertedPin = parseInt(pin);

//     const cashout = document.getElementById('cashout-amount').value;
//     const convertedCashout = parseFloat(cashout);

//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convertedMainBalance = parseInt(mainBalance)

//     if(convertedPin === 1234){
//         const sum = mainBalance - convertedCashout;
//         document.getElementById('main-balance').innerText = sum;

//     }
//     else{
//         alert('Wrong pin')
//     }
// })