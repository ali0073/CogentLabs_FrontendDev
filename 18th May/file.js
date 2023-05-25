// 18TH MAY PRACTICE

// I learned Equality operators == (loosely equal) === (strictly equal)
// I learned about Typecasting
// DataStructures are three types >> Indexed (e.g Array), Structured (e.g JSON), Unstructured (e.g Maps)
// Learned about the difference between shadow copy and Deep Copy.
// Learned how to use spread operater and the new function structuredClone (ES6)
// Learned about MAP FUNCTION

if (1 == "1") console.log("Are Equals"); // ==, loose Equals, it tends to typecast right hand side into left
if (1 != "a") console.log("Are Not Equals"); // ==, loose Equals, it tends to typecast right hand side into left

if (1 !== "1") console.log("Are Equals");
else console.log("Not Equals");

// array
const arr = [{ Name: "Ali" }, { Designation: "Software Engineer" }];

// FOR
const arr2 = [1, 2, 3, 4, 5];
for (let key of Object.entries(arr2)) {
  console.log(arr2[key]);
}

// MAP
const names = arr.map((val) => {
  console.log(val);
});

Object.keys(arr).forEach((key) => {
  console.log(arr[key]);
});

// we have to use here spread operator but don't know the index to avoid shallow copy
const array = ["apples", "orannges", "mangoes", ["banana"]];
let arrayTwo = [];

// So, we use the map function to avoid shallow copy problem in spread operator
array.map((key, index) => {
  if (index != 3) arrayTwo.push(key);
  else arrayTwo.push(new Array(key));
});

const arrayThree = new Array("Asad");
console.log(arrayThree);
console.log(arrayTwo);

// const arrayTwo = [...array]; // spread operator ES6
arrayTwo[3][0] = "strawberry";

// console.log(arrayTwo, 'Fruits Array Two');
console.log(array, "Fruits Array One");

// Objects practice with spread operators
const obj = {
  name: "Ali",
  designation: "SE",
  obj3: {
    address: "Model Town",
  },
};
// shallow copy --> References copy. Deepy copy ---> actual objects with new references
const obj2 = {
  ...obj,
  obj3: {
    // whenever we add a key in an object, we actually add a new reference
    ...obj.obj3,
  },
};

obj2.obj3.address = "Johar Town";
// const obj2 = structuredClone(obj);
// obj2.obj3.address = 'Johar Town';
console.log(obj2);
console.log(obj);

//
console.log("Start");

const cars = ["audi, bmw", ["moreCars"]];
const secondCars = [];

// practice to avoid shallow copy while using spread operator
cars.map((key, index) => {
  if (index != 1) {
    secondCars.push(key);
  } else {
    const arrayObject = new Array(key);
    secondCars.push(arrayObject);
  }
});

console.log(secondCars);
