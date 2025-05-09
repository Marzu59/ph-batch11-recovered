function totalBudget(lq, tq, mq){

   const  laptop = 35000 
   const  tablet = 15000 
    const  mobile = 20000 
   
    const totalLaptopPrice = laptop * lq;
    const totalTabletPrice = tablet * tq ;
    const totalMobilePrice = mobile * mq;

    const totalBudgetofAll = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalBudgetofAll;



}


const  laptopQ = 2;
const tabletQ = 1;
const mobileQ = 3;
const  allPrice = totalBudget(laptopQ, tabletQ, mobileQ)
console.log(allPrice);