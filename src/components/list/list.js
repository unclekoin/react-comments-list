import React from 'react';
import './list.css';
import Item from '../item';

const List = ({ posts }) => {

  const elements = posts.map((post, i) => (
    <Item key={ posts.length - i } { ...post }/>));

  return (
    <ul className="list list-group">
      { elements }
    </ul>
  );
};

export default List;
