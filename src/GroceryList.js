import React, { useState } from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { addGrocery, removeGrocery } from './features/groceriesSlice';

export default function GroceryList () {
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [ input, setInput ] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addGrocery(input));
    setInput('');
  }

  return (
    <div>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {list.map((val, i) => (
          <li key={i} style={{
            display: 'flex',
            width: '20rem',
            justifyContent: 'space-between',
          }}>
            <span>{i + 1}. {val}</span>
            <button onClick={() => dispatch(removeGrocery(i))}>x</button>
          </li>
        ))}
      </ul>
      <form onSubmit={addItem}>
        <input type="text" placeholder="Grocery to Add to List" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}