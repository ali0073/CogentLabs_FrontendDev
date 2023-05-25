import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Header from "./Header";

function App() {
  const items = ["Ali", "Asad", "CogentLabs"];
  return (
    <div>
      <Header />
      <ListGroup arrItems={items} heading="My List"></ListGroup>
      {/* <Alert text="<di" */}
      <Alert>
        {" "}
        <h1>Hi</h1>
      </Alert>
      <h1>InnerContent</h1>
    </div>
  );
  // return (
  //   <div className="alert alert-primary"><Alert text="Hello"/></div>
  // );
}

export default App;

/*

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

*/
