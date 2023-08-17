module.exports = class OrderDetails{
    constructor(ordId,ordName,orderItems,items,totalPrice,ordAddress,ordPhone,ordEmail, ordDate){
        this.ordId= ordId,
        this.ordName= ordName,
        this.orderItems= orderItems,
        this.items= items,
        this.totalPrice= totalPrice,
        this.ordAddress= ordAddress,
        this.ordPhone= ordPhone,
        this.ordEmail= ordEmail,
        this.ordDate= ordDate
    };
};