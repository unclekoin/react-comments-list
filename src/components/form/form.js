import React from 'react'
import './form.css';

const Form = ({ onAdd }) => {

  return (
    <div className='form d-flex'>
      <input
        className='form-control post-label'
        type="text"
        placeholder='Write something...'
      />
      <button
        className='btn btn-outline-secondary'
        onClick={() => onAdd('Hello')}
        type='submit'>
        Add</button>
    </div>
  )
}

export default Form;
