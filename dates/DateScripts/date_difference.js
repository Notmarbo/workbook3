"use strict";


let startDate = new Date("May 13, 2021");
let endDate = new Date("May 13, 2023");

let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedMilliseconds = endDate.getTime() - startDate.getTime();

let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log(startDate + endDate + "are "+numDays + " apart!")