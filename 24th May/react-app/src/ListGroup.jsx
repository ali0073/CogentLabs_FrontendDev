import { useState } from "react";

function ListGroup({arrItems, heading}) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // useState when used returns an array with 2 indexes
    // 1. variable actual value
    // 2. setterFuntion()
  // when used ---> React keeps a log ot reference of the vaiable that we have used in it
  // whenever we are going to set the new value for that variable, react re-render mechanism will be triggered
    // V DOM -> Compare -> changes and re-render the changes

  // function handleClick (item, index) { console.log(item, index)}

  const xyz = 3;
  return ( 
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {
        arrItems.map((item, index) => ( 
            <li  className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {
              setSelectedIndex(index) // whenever change DOM --> function
              console.log(item, index);
            }}>{item}</li>
        ))
        }
      </ul>
    </>
  );
}

export default ListGroup;