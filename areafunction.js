// This example is for calculating an area
const prompt = require('prompt-sync')();

let x = prompt("Enter length: ");
let y = prompt("Enter breadth: ");
let length = parseInt(x);
let breadth = parseInt(y);

function totalarea(length, breadth) {
    let answer = length * breadth;
    return answer;
}
console.log("Total area is: " + totalarea (length,breadth));
