


function sum(){
    let counter = 0;

    return function (){
        counter++
        // console.log(counter)
        
    }

     
     }
    


// যদি sum() ফাংশন একটি ফাংশন রিটার্ন করে, তাহলে result একটি ফাংশন হয়ে যাবে।
const result = sum()
result()
result()
