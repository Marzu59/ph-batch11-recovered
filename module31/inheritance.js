class vehical{

    constructor(name, price){
        this.name = name
        this.price = price
    }
   
    move(){
        // console.log('jekono jaygeay jete pare ai r ki')
    }


}


class bus extends vehical{
    constructor(name, price, seat){
        super(name,price)
        this.seat = seat
    }

    route(){
        // console.log('dhaka to cox bazar')
    }
}