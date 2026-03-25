

let arr1 =['apple','mango','grapes','pineapple'];
let arr2 =['banana','orange'];

//  push,pop,shift,unshift,splice

arr1.push("banana");
arr1.pop();
arr1.shift();
arr1.unshift("banana");
arr1.splice(2,0,"banana");
// array concatination

let result= arr1.concat("dino",arr2);
// spread operator
let result2 =[...arr1,...arr2,"dino"];
console.log(arr1)
console.log(result);
console.log(result2);

// for each loop
console.log("for each loop:")
arr1.forEach(arr=>{
    console.log(arr);
})

// create a new array adding 5 in each items using for loop

let num=[1,2,3,4,5]
let newArr=[];
num.forEach(num=>{
    //add 5 to each element and push to new array
    newArr.push(num+5);
})
console.log(newArr);

//  Assignment add 3 for even number and 7 for odd number