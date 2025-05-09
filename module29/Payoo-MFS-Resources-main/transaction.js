document.getElementById('transaction-history-box').addEventListener('click', function(event){
     event.preventDefault();
     togglehandle('add-money-section', 'none')
     togglehandle('cashout', 'none')
     togglehandle('transaction-history', 'block')


})