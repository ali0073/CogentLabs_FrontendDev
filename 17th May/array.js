// ARRAYS
const cars = ["AUDI", "BMW"];

const moreCars = [];

moreCars[0] = "audi";
moreCars[1] = "bmw";

// ARRAY
const place = ["Krc", "Nwb", "Lhr", "Hyd"];

// lenght of Array
console.log(place.length);

// converting into Strings
let stringArray = place.toString();
console.log(stringArray);

// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
let joinArray = place.join(" * ");
console.log(joinArray);

// POP And PUSH Method
console.log(place.pop()); // return the name of pop element
console.log(place.push("SBA")); // return new lenght

// shift method
let shiftArray = place.shift();
console.log(shiftArray); // return the first element

// Unshift Method
let unShiftArray = place.unshift("newCity");
console.log(unShiftArray); // add into the first index

const dlteArray = delete place[1]; // delete the element
console.log(dlteArray);

// concat // always return new array // merge two array
const names = ["Emil", "Tobias", "Linus"];
const newArray = place.concat(names);
console.log(newArray);

// Flettening
const fruits = [["Banana", "Orange"], "Apple", "Mango"];
const newFruits = fruits.flat();
console.log(newFruits);

fruits.map((entry) => console.log(entry));
