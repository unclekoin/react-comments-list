import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {

  state = {
    text: ''
  };

  onValueChange = ({ target }) => {
    this.setState({
      text: target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const text = this.state.text.trim();
    if (text) {
      this.props.onAdd(text);
    }

    this.setState({
      text: ''
    });
  };

  render() {

    return (
      <form
        className="form d-flex"
        onSubmit={ this.onSubmit }
      >
        <input
          className="form-control post-label"
          onChange={ this.onValueChange }
          value={ this.state.text }
          type="text"
          placeholder="Write something..."
        />
        <button
          className="btn btn-outline-secondary"
          type="submit">
          Add
        </button>
      </form>
    );
  }
}
