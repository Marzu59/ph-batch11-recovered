// upto 100 -- > 100
// more then 101-200->90
// more then 200--> 70



function discountPrice(quentity){
    if(quentity <= 100){
        const total = quentity * 100;
        return total;
    }
    else if( quentity <= 200){
        const total = quentity * 90
        return total;
    }
    else{
        const total = quentity * 70;
        return total;
    }

}

const quentity = 1;
const  funal = discountPrice(quentity);
console.log(funal);