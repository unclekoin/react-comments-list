import React from 'react';
import './list.css';
import Item from '../item';

const List = ({ data, onDelete, onToggleImportant, onToggleLiked }) => {

  const elements = data.map(({ id, ...dataItem }) => (
    <Item
      key={ id }
      { ...dataItem }
      onDelete={ () => onDelete(id) }
      onToggleImportant={ () => onToggleImportant(id) }
      onToggleLiked={ () => onToggleLiked(id) }
    />));

  return (
    <ul className="list list-group">
      { elements }
    </ul>
  );
};

export default List;
