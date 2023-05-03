"use strict";

let message = "Our corporate offices are located in Dallas";
let find = /Dallas/;
let result = message.replace(find, "Austin")
console.log(result)