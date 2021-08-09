import React from 'react';
import './item.css';

const Item = ({ label, onDelete, onToggleImportant, onToggleLiked, important, like }) => {

  let classNames = 'item d-flex justify-content-between align-items-center';
  classNames = important ? classNames + ' important' : classNames;
  classNames = like ? classNames + ' like' : classNames;

  return (
    <li className={ classNames }>
        <span
          className="item__label"
          onClick={ onToggleLiked }
        >{ label }</span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-light btn-star btn-sm"
          onClick={ onToggleImportant }
          type="button">
          <i className="fas fa-star"/>
        </button>
        <button
          className="btn btn-light btn-trash btn-sm"
          onClick={ onDelete }
          type="button">
          <i className="fas fa-trash-alt"/>
        </button>
        <i className="fas fa-heart"/>
      </div>
    </li>
  );
};

export default Item;

