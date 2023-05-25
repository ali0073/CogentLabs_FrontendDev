console.log("Start");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2");
  }, 2000);
});

p1.then((data) => {
  console.log(data);
  return p2;
}).then((data) => {
  console.log(data);
});

console.log("End");

// to get data for 2 promises together
Promise.all([p1, p2]).then((data) => {
  console.log("ALL", data);
});

//
// --------------------
// CALLBACK FUNCTIONS

const calculator = (oper, a, b) => {
  return oper(a, b);
};

const sum = (a, b) => {
  return a + b;
};

const mul = (a, b) => {
  return a * b;
};

console.log(calculator(sum, 1, 4));
console.log(calculator(mul, 1, 4));

// ASYNC / WAITE.....
// API = https://jsonplaceholder.typicode.com/posts

async function getPosts() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await responce.json();
  console.log(posts);
}

getPosts();

// to resolve error handling in Async, we can use try catch

async function getPosts2() {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await responce.json();
    console.log(posts);
  } catch (err) {
    console.log("Error is: ", err);
  }
}

getPosts2();

// we also have another method to catch error
async function getPosts3() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await responce.json();
  console.log(posts);
}

getPosts3().catch((error) => console.log("Error", error));
