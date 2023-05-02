"use strict";

function getSocSecTax(grossPay) {
    let socialTaxed = grossPay * 6.2 / 100;
    return socialTaxed;
}
function getMedicareTax(grossPay) {
    let medicareTaxed = grossPay * 1.45 / 100;
    return medicareTaxed;
}
function getFederalTax(grossPay, witholdingCode) {
    let federalTaxed;
    if (witholdingCode == 0) {
        federalTaxed = grossPay * 23 / 100;
    } else if (witholdingCode == 1) {
         federalTaxed = grossPay * 21 /100;
    } else if (witholdingCode == 2) {
         federalTaxed = grossPay * 19.5 /100;
    } else if (witholdingCode == 3) {
         federalTaxed = grossPay * 18.5 /100;
    } else{
        let overage = witholdingCode - 4;
        let overageAmount = overage * 0.005;
         fedTaxed = grossPay * (0.18 - overageAmount);
    }
    return federalTaxed;
}
    console.log(getSocSecTax(200000));
    console.log(getMedicareTax(200000));
    console.log(getFederalTax(200000, 3))