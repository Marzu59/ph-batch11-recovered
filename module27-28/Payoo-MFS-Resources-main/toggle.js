document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function() {
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block'
})

document.getElementById('cashout-box').addEventListener('click', function(){
    console.log('ok')
     document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout').style.display = 'block'
})