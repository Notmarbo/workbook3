"use strict";
["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const today = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov","Dec"]
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
today.setDate(4);
today.setMonth(4);
let day2 = "05";
today.setFullYear(2023);

const answer = months[today.getMonth()]+ " " + day2 + "(" + daysOfWeek[today.getDate()] + ")"
console.log(answer)