
document.getElementById('login-btn').addEventListener('click', function(event) {
    // console.log('hello')
          event.preventDefault();
          const accounNumber = document.getElementById('account-number').value; 
 
          const pinNumber = document.getElementById('pin-number').value;
        //  console.log(accounNumber, pinNumber)
        const pinInNum = parseInt(pinNumber)

        if(accounNumber.length === 11){
             

              
            if(pinInNum === 1234){
                // console.log('pin thik')

                window.location.href = "./main.html"
            }
            else{
                alert('please enter right pin')
            }
              

            
        }
       else{
        alert('enter valid numbr')
       }


})