import React from 'react'
import './form.css';

const Form = () => {

  return (
    <form className='form d-flex'>
      <input
        className='form-control post-label'
        type="text"
        placeholder='Write something...'
      />
      <button
        className='btn btn-outline-secondary'
        type='submit'>
        Add</button>
    </form>
  )
}

export default Form;
