// What I Learned in date 16th MAY 2023:

// >> I learned the difference between single thread and multithread. I found JS is single thread and how we can make it multi-thread with the help of event loop.
// >> I learned about Asynchronus language. Js is synchronous and to make it Asynchronus, we need to use callbacks.
// >> I learned the difference between ES5 vs ES6. I leanred how EcmaScript community avoid "break the web" principle - It can be done with the help of Transpiler (Bible).
// >> I learned how to not write ambigous code. I leanred JS is dynamically type language.
// >> I learned how Asynchronous work, and how the Asynchrounus tasks goes into the V8 engine and then to eventLoop.
// >> I learned that everything in JS is object, even the Array too. To iterate the arrayys/object, we need to use Object CLASS .Keys or .enetries functions with the help of forEach or forOF loop.
// >> I learned about the callback fucntions - that we can pass function in the function.
//
//
//
//
// The below code is the practise of 16th May:
// Mosh hamdani > YT

// var is old way to assign and not suitable to use in current era
// var can not stop us to recreate the variable with the name that is already created
// var name = 'Ali';
// var name = 'Ghazanfar';
// console.log(name);

// es6 provides let keyword that does stop us to reassign the same name
// let firstName = 'Ali';
// let firstName = "Ghazanfar"; {I got error}

// const is used to assign the number for one time that cannot be changed
// const val = 67;

// Prmitive types are those that is builtin by JS like String, Boolean etc

// if we assign undefined to a variable, the datatype of that var become undefined
// but if we assign a variable null, it's type object

// objects
let person = {
  name: "Ali",
  age: 22,
};

person.name = "ALi2";
person.age = 23;

// we can also make it dynamically
let secondName = "name";
person[secondName] = "Ghazanfar";

// ARRAY
let colours = ["red", "Blue"];
// we can add numbers in same string array
colours[2] = 2;
console.log(colours);
console.log(colours.length); //to find the lenght of array

//functions

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

let ans = sum(5, 7);
console.log(ans);

// LOOPS

// well the object does not iterate, so to make the object iterate able, we have to use the forEach or forOF loops by the help of Object.keys builtin function
// Object is an class that has  many builtin functions and .keys is one of them that provide us the key value of object values.

// examples

let obj = {
  name: "Ali",
  age: 22,
};

console.log(typeof obj);
console.log(typeof colours);

Object.keys(obj).forEach((k) => {
  console.log(k);
}); // we don't have option to insert some condition in forEach Loop

for (let key of Object.keys(obj)) {
  console.log(key); // we have option to insert a condition in forOf Loop
}

// we can also print the key with their value with the help Object class function .entries
for (let key of Object.entries(obj)) {
  console.log(key);
}

// the problem which makes us to know function can be passed to a function

function calculate(operation, firstNum, secondNum) {
  if (operation == "add") {
    // sync callbackhell
    return firstNum + secondNum;
  } else if (operation == "divide") {
    return firstNum / secondNum;
  } else if (operation == "multiply") {
    return firstNum * secondNum;
  } else if (operation == "sub") {
    return firstNum + secondNum;
  } else {
    return "Error";
  }
}

function add(f, s) {
  return f + s;
}

function sub(f, s) {
  return f - s;
}

function cal(callback, fNumber, sNumber) {
  return callback(fNumber, sNumber);
}

// avoiding the async callback hell
console.log(cal(add, 5, 6));
// async
// ES5 Promises
console.log(calculate("add", 4, 5));
