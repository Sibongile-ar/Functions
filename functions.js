let square = function (number) {
return number * number;
};
let x = square(4); // x gets the value 16
console.log(x);

// An example of using an arrow function
//Parameters are additional information passed to a function
const a = ["Hydrogen","Helium","Lithium","Beryllium"];
const a2 = a.map(function (s) {
return s.length;
});
console.log("Normal way "
, a2); // [8, 6, 7, 9]
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function "
, a3); // [8, 6, 7, 9]
//A function in JavaScript can have
//any number of parameters and also at the same time, a function in JavaScript
//can not have a single parameter.



function multiply(a, b) {
b = typeof b !== "undefined" ? b : 1; //In this example, we pass the argument to the function.

return a * b;
}
console.log(multiply(69)); // 69

// Another Example
function welcomeMsg(name) {
return ("Hello " + name + " welcome to Page for Devolopers")
}
// creating a variable
let nameVal = "Admin";
// calling the function
console.log(welcomeMsg(nameVal));


let myFunction = (a, b) => a * b;
console.log (myFunction(4, 5)); //arrow example


let hello = "";
hello = (val) => "Hello " + val;
console.log(hello("Universe!")); //arrow function with a parametre

