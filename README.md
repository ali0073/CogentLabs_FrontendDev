
**16th MAY**
I learned the difference between single thread and multithread. I found JS is single thread and how we can make it multi-thread with the help of event loop.
I learned about Asynchronus language. Js is synchronous and to make it Asynchronus, we need to use callbacks.
I learned the difference between ES5 vs ES6. I leanred how EcmaScript community avoid "break the web" principle - It can be done with the help of Transpiler (Bible).
I learned how to not write ambigous code. I leanred JS is dynamically type language.
I learned how Asynchronous work, and how the Asynchrounus tasks goes into the V8 engine and then to eventLoop.
I learned that everything in JS is object, even the Array too. To iterate the arrayys/object, we need to use Object CLASS .Keys or .enetries functions with the help of forEach or forOF loop.
I learned about the callback fucntions - that we can pass function in the function.

The below code is the practise of 16th May:
Mosh hamdani > YT

var is old way to assign and not suitable to use in current era
var can not stop us to recreate the variable with the name that is already created
var name = 'Ali';
var name = 'Ghazanfar';
console.log(name);

es6 provides let keyword that does stop us to reassign the same name
let firstName = 'Ali';
let firstName = "Ghazanfar"; {I got error}

const is used to assign the number for one time that cannot be changed
const val = 67;

Prmitive types are those that is builtin by JS like String, Boolean etc

if we assign undefined to a variable, the datatype of that var become undefined
but if we assign a variable null, it's type object

**17th MAY**
I learned the callbacks is used to execute the event loop thread. But to make it in more clean way, we have promises.
I learned the concept of promise, why promises is used instead of callbacks.
I learned the states of promises.
I learned about the async/await, how it avoid the "callback hell".
I have studied the basic idea of DOM. How it's work.
I learned Hoiting of functions
I have practiced array builtin JS Methods

**18th MAY**
I learned Equality operators == (loosely equal) === (strictly equal)
I learned about Typecasting
DataStructures are three types >> Indexed (e.g Array), Structured (e.g JSON), Unstructured (e.g Maps)
Learned about the difference between shadow copy and Deep Copy.
Learned how to use spread operater and the new function structuredClone (ES6)
Learned about MAP FUNCTION

**19th MAY**
MOdules vs Common Js
DOM explain in details
Events in DOM and how to attach them to the DOM
Nodes vs elements
How to create elements in Vanilla JS and append them into DOm using references

Axios
fetch practice
JSX and its practice ( only saw what JSX does behind the scene and how Translipers convert the code into HTML)
Closures --> Ability of a function to remember it's lexicle context

>> SOLID PRINCIPLE:
Single Responsibilty => every class should have only one function/thing.
Open Closed => only inherit the func from parent class that was needed.
Liskov Subsitution => every derived class should be substitutable for its parent class.
Interface Segregation => create new interface and then let your class implement multiple interfaces as needed.
Dependencies Inversion => high level modules should not depend upon low level modules - make tree.
CSS intoructions
Specificity
Selectors
Syntax about classes and ids and tags

**22th MAY**
What is CSS?
What We Need To Start
Methods For Adding CSS
Color (all 3 methods)
CSS Selectors
Colors in CSS
Web Safe Fonts (sizes, weights, and height) 
Class and Id
Box Model, Margin and Padding, and Borders
Text Formatting Styles
Links (images 42:20)
Forms (button style 48:30-51:20)
Alignment and Floating
Positioning in CSS
Setting Images As Element Background

**23th MAY**
What is React?
Setting Up the Development Environment 
Creating a React App -> Vite
Project Structure
Creating a React Component
How React Works
React Ecosystem
Fragments
Rendering Lists
Conditional Rendering
Handling Events
Managing State
Passing Data Via Props
Passing Functions Via Props
State Vs Props

**24th MAY**
Hooks
Use-State
Higher Order Component
Passing Children to the Components and why
we do this considering the usecase of HOC */
