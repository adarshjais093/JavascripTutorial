var x=7;
getName();  //this gets executed due to hoisting 
console.log(x);
function getName(){
    console.log("Namaste Javascript");
}


// arrow function is treated as variable and will not get executed before declaring
var getName2=()=>{   
    console.log("Namaste javascript");
}

// this is also treated as variable
var getName3=function(){

}