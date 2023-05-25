// MOdules vs Common Js
// DOM explain in details
// Events in DOM and how to attach them to the DOM
// Nodes vs elements
// How to create elements in Vanilla JS and append them into DOm using references

// Axios
// fetch practice
// JSX and its practice ( only saw what JSX does behind the scene and how Translipers convert the code into HTML)
// Closures --> Ability of a function to remember it's lexicle context

// SOLID PRINCIPLE:
// Single Responsibilty => every class should have only one function/thing.
// Open Closed => only inherit the func from parent class that was needed.
// Liskov Subsitution => every derived class should be substitutable for its parent class.
// Interface Segregation => create new interface and then let your class implement multiple interfaces as needed.
// Dependencies Inversion => high level modules should not depend upon low level modules - make tree.
// CSS intoructions
// Specificity
//  Selectors
// Syntax about classes and ids and tags

// Common Js vs Modluar approach in Es6
console.log("Hello World");

// import axios, { isCancel, AxiosError } from 'axios'; // Es6 Module feature ---> Library
// // const axios = require('axios');
// console.log(isCancel('Something'));

function addADivInsideDOM() {
  console.log("Inside the function");
  const box = document.createElement("div");
  box.innerHTML = "New Div";
  box.className = "nestedDiv";

  const newDiv = document.createElement("div");

  newDiv.innerHTML = "This is a new Div";
  box.appendChild(newDiv);

  // getting the div with id= main
  document.getElementById("main").append(box);
}
