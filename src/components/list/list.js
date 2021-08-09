import React from 'react';
import './list.css';
import Item from '../item';

const List = ({ posts, onDelete }) => {

  const elements = posts.map(({ id, ...post }) => (
    <Item
      key={ id }
      { ...post }
      onDelete={ () => onDelete(id) }
    />));

  return (
    <ul className="list list-group">
      { elements }
    </ul>
  );
};

export default List;
