const cart=["shoes","pants","kurta"];

//use of callback for asynchronous communication between apis
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
});



//use of promise is much better than callback
const promise= createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
});



//another way to use promises----promise chain
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
})