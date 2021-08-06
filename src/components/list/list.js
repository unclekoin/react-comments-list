import React from 'react';
import './list.css';
import Item from '../item';

const List= () => {

  return (
    <ul className='list list-group'>
      <Item />
      <Item />
      <Item />
    </ul>
  )
}

export default List;
