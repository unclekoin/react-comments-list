import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      important: false,
      like: false
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important
    }));
  };

  L;

  onLike() {
    this.setState(({ like }) => ({
      like: !like
    }));
  };

  render() {
    const { label, onDelete } = this.props;
    const { important, like } = this.state;

    let classNames = 'item d-flex justify-content-between align-items-center';
    classNames = important ? classNames + ' important' : classNames;
    classNames = like ? classNames + ' like' : classNames;

    return (
      <li className={ classNames }>
        <span
          className="item__label"
          onClick={ this.onLike }
        >{ label }</span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-light btn-star btn-sm"
            onClick={ this.onImportant }
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
  }
};

