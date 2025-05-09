document.getElementById('cashout').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none'





document.getElementById('add-money-box').addEventListener('click', function (){
 togglehandle('add-money-section', 'block')
 togglehandle('cashout', 'none')
 togglehandle('transaction-history', 'none')


})

document.getElementById('cashout-box').addEventListener('click', function (){
    togglehandle('cashout', 'block');
    togglehandle('add-money-section', 'none');
    togglehandle('transaction-history', 'none');
})













