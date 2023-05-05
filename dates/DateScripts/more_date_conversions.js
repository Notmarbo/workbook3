"use strict";
const myBirthday = new Date();
myBirthday.setMonth(10);
myBirthday.setDate(17);
myBirthday.setFullYear(2001);
console.log(myBirthday.toLocaleString());

const momBirthday = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov","Dec"]
momBirthday.setDate(21);
momBirthday.setMonth(4);
momBirthday.setFullYear(1972);
const answer = months[momBirthday.getMonth()] + " " +momBirthday.getDate() + " "+ momBirthday.getFullYear()  ;

console.log(answer);

const dadBirthday = new Date(1974, 2, 17);
const year2 = dadBirthday.getFullYear(1974);
const day2 = dadBirthday.getDate(17)
const month2 = dadBirthday.getMonth(1)
const dadAnswer = year2 + "," + month2 + "," + year2;
console.log(dadAnswer.toLocaleString());