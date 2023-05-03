"use strict";

function getSupplier(partNum){
    let sliceFinder = partNum.indexOf(":");
    let supplier = partNum.slice(0,sliceFinder);
    console.log(supplier)

}
function getProductNumber(partNum){
    let sliceFinder1 = partNum.indexOf(":");
    let sliceFinder2 = partNum.indexOf("-");
    let productNumb = partNum.slice(sliceFinder1 + 1,sliceFinder2);
    console.log(productNumb)

}
function getSize(partNum){
    let sliceFinder3 = partNum.indexOf("-");
    let productSize = partNum.slice( sliceFinder3 + 1);
    console.log(productSize)
}
getSupplier("ACME:123-L")
getProductNumber("ACME:123-L")
getSize("ACME:123-L")