//find  sum
var a=7;
var b=9;
var sum = a+b;
console.log(`The sum of ${a} and ${b} is`,sum);

//find remainder
var a=13;
var b=5;
var remainder = a % b;
console.log(`Remainder of ${a} and ${b} is`,remainder);

//using let
let a1=4;
if(true){
    let a1=5;
 }
 console.log("blocked scope",a1);

// using var
var a2=4;
if(true){
    var a2=5;
 }
 console.log("function scope",a2);

 console.log("Hoisting in js")
 let a3=5;
 if(true){
    console.log(a3);
    let a3=7;
    console.log(a3);
 }
 console.log(a3);