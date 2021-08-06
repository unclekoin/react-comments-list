import React from 'react';
import './item.css'

const Item = () => {

  return (
    <li className='item like d-flex justify-content-between '>
      <span className='item__label'>Hello World</span>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn-star btn-sm' type='button'>
          <i className="fas fa-star" />
        </button>
        <button className='btn-trash btn-sm' type='button'>
          <i className="fas fa-trash-alt" />
        </button>
        <i className="fas fa-heart" />
      </div>
    </li>
  )
}

export default Item;
