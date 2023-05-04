const currentDate = new Date();
currentDate.setMonth(04)
currentDate.setDate(04)
currentDate.setYear(2023);

  
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toUTCString());
console.log(currentDate.toLocaleString());