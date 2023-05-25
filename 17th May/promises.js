// I learned the callbacks is used to execute the event loop thread. But to make it in more clean way, we have promises.
// I learned the concept of promise, why promises is used instead of callbacks.
// I learned the states of promises.
// I learned about the async/await, how it avoid the "callback hell".
// I have studied the basic idea of DOM. How it's work.
// Hoiting of functions

// Promises
let promise = new Promise(function (resolve, reject) {});

// function which just changes inner html of a div
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// factorial find 100000000000000

// async
// let myPromise = new Promise((resolve, reject) => {
// 	let x = 0;

// 	// some code (try to change x to 5)

// 	if (x == 0) {
// 		resolve('OK');
// 	} else {
// 		reject('Error');
// 	}
// });

//

display_One();

function display_One() {
  let a = 123;
  console.log("I am display One");
}

console.log("Line One");

const url = "google.com";

// db user, subscriptions status, Url allow, JWT token generate, User login status true, response object ---> send on front end

const dbConnection1 = null; // returns a promise when connection is created
const subscriptions = null; // returns a promise when subsciprtion is checked
const JWT = null; // retuns a prmise as well

dbConnection.then((vlaue) => {
  // async callBack hell, readibility ---> ES5
  subscriptions.then((val) => {
    JWT.then((v) => {
      // 4th
      //5th
    });
  });
});

// ES6 async await

async function getJWTTOken() {
  const response = await JWT;
  return response;
}

async function getSub() {
  const response = await getJWTTOken();
  if (response) {
    // check subscription status
    return true;
  }
}

async function dbConnection() {
  const response = await getSub();
  if (response) {
    // check subscription status
    return true;

    // object response and send it to anywhere
  }
}

myPromise.then((value) => console.log(value));
console.log("Line Two");

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    // backend API
    resolve("I love You !!");
  });
  // document.getElementById('demo').innerHTML = await myPromise;

  let val = await myPromise;
  document.getElementById("demo").innerHTML = value;
  document.getElementById("demo").innerHTML = value;

  myPromise
    .then((value) => {
      document.getElementById("demo").innerHTML = value;
    })
    .then((val) => (document.getElementById("demo").innerHTML = val));
}

myDisplay();
