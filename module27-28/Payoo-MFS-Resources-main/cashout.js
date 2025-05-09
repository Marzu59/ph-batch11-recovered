document.getElementById('cashout-btn').addEventListener('click', function(event) {
    event.preventDefault();
   const pin =  document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const cashout = document.getElementById('cashout-amount').value;
    const convertedCashout = parseFloat(cashout);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseInt(mainBalance)

    if(convertedPin === 1234){
        const sum = mainBalance - convertedCashout;
        document.getElementById('main-balance').innerText = sum;

    }
    else{
        alert('Wrong pin')
    }
})