import React from 'react'

function Listandkeys(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li >
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default Listandkeys


// -------------------------------------------------------------------------------------- //

/*
Each child in a list should have a unique "key" prop.
key={number.toString()}
*/