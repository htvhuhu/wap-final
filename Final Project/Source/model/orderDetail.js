module.exports = class OrderDetails{
    constructor(ordId,ordName,orderItems,totalPrice,ordAddress,ordPhone,ordEmail, ordDate){
        this.ordId= ordId,
        this.ordName= ordName,
        this.orderItems= orderItems,
        this.totalPrice= totalPrice,
        this.ordAddress= ordAddress,
        this.ordPhone= ordPhone,
        this.ordEmail= ordEmail,
        this.ordDate= ordDate
    };
};