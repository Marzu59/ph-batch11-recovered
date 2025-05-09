document.getElementById('add-money').addEventListener('click', function (event){

    event.preventDefault();
    const amount = document.getElementById('amount').value; 
    const convertedAmount = parseFloat(amount)
    // console.log(typeof convertedNumber)

    const pinNumber = document.getElementById('pin-number').value;
    
    const pinInNum = parseInt(pinNumber)
    const minBalance =document.getElementById('main-balance').innerText;
    const convertMinBalance = parseFloat(minBalance);
    

    if( pinInNum === 1234){
        const sum = convertMinBalance + convertedAmount ;
         document.getElementById('main-balance').innerText = sum
    }
    else{
        console.log('pin thik na')
    }


})