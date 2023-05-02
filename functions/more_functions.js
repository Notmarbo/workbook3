"use strict";

function displayMailingLabel(name, address, city, state, zip){
 let shippingAddress = name + " "  + address + " "  + city + " "  + state + " "  + zip;  
console.log(shippingAddress);
}

function addNumbers(num1, num2){
    let math = num1 + num2;
    console.log(num1 + "+" + num2 + "=" + math);
    


}
function displayRecipt(totalDue, someNumber){
    let changeDue = totalDue - someNumber;
    console.log(changeDue)
}
console.log("this is my shipping address")
displayMailingLabel("marco", "123 moss rd", "john park", "NY", "33294");
console.log("this is your shipping address")
displayMailingLabel("You", "1231 estate rd", "Marked park", "Nj", "31394");
console.log("here is a simple equation")
addNumbers(20, 2);
console.log("here is a simple equation")
addNumbers(2000, 2000);
console.log("Here is you bill");
console.log("Change due");
displayRecipt(25, 30);
console.log("Here is you bill");
console.log("Change due");
displayRecipt(100, 30);
