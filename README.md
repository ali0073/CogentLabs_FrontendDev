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

> > SOLID PRINCIPLE:
> > Single Responsibilty => every class should have only one function/thing.
> > Open Closed => only inherit the func from parent class that was needed.
> > Liskov Subsitution => every derived class should be substitutable for its parent class.
> > Interface Segregation => create new interface and then let your class implement multiple interfaces as needed.
> > Dependencies Inversion => high level modules should not depend upon low level modules - make tree.
> > CSS intoructions
> > Specificity
> > Selectors
> > Syntax about classes and ids and tags

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

**24th MAy**
Practice for all the thing i did on 23th May

**25th MAY**
Hooks
Use-State
Higher Order Component
Passing Children to the Components and why
we do this considering the usecase of HOC \*/

**26th May**
Practise all the things i did on 25th May

**29th May**
Created a react project:
in which previous learned topics are covered such as useStat, props, etc.

**30TH May**
Created a react project:
in which I learned about the Routes.

**31th May**

**1st JUN**

**Why Do We Need to Use the REACT STATE?**

Problem:
We are manipulating individual pieces of UI that work very well in very small tasks but it becomes difficult to manage in complex projects.

Solution:
React introduces States - we can describe the different states that our component can be in, and switch between them in response to the user.

How we have to think in React while using State…

1. Think about your component each visual states
i-e: empty -> typing -> submitting -> success or error

2. On what trigger for above visuals, state changes

3. Time to declare the state in the memory
	First try to write must have states
	Then, try to make all visuals state

4. Think and remove duplicates

5. At the end, connect event handlers to set the states

**Best Practices for Structuring State**

Structuring the State well is always beneficial while modifying and debugging.

Here are some best practices to use:

. If two state variables always change together, it might be a good idea to unify them into a single state variable. 

For example, (x and y axis) of the mouse cursor are changed at the same time, if you create separate states for each, it might not be a good practice. You can merge them in one like:

Const [position, setPosition] = useState({x:0, y:0});

. Avoid contradiction in State:

Like using isSent and isSending (both will not have to be true at a time), otherwise you end up with the error.
We can use isSent and isSending, but it leaves the door open for the error.

To solve this thing or the better way to handle this situation is - we can use Status State and passing their variables three valid status, like:

Const [status, setStatus] = useState(isTyping); // isSending, isSent

. Avoid Redundant State:

Simple means to not use those states that are not needed.

For example, we have two states; one for getting updated with firstName and second state for secondName. Now what if we use another state for completeName? Yup, it’s a bad idea.

We can instead calculate the full name from the firstName state value and secondName during render, we don’t need to use another state for getting a complete name.

. Avoid Duplication State:

Let’s imagine you have two states, one is for items, another is for selectedItems.

And you are storing the selected item object in the selectedItem state variable, that is not great.

Instead we can use the selectedID, that does not duplicate the whole object but provides us the selected item id so we can fetch selected id data from the item - simple and best.

. Avoid Deeply Nested State:

Updating the nested State causes duplication everytime. Solution is to give each parent an array of its child ID.

**Sharing State Between Components:**

The question/problem is, how to change the state of two components together - if I want to make “child A” state variable isActive True, the second component variable isActive needs to False, they both do not True at a time. How to solve this?

We can do this by Lifting State up. 

Remove state from the components. Find the closest parent of both components and declare the state in it. Use the props to pass the value from parents to childs. Instead of sending boolean values use index 0 and 1. When the index is 0, child A is active and when the index is 1, child B is active.

**2nd JUNE**
Leanred 1st may topics more in deep.
Also leanred about Preserving and Resetting State

**3rd JUNE**
The problem with passing props
What is context API
Why we Need Context API
Common alternatives to context
