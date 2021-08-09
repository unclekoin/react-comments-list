import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import Search from '../search';
import Filter from '../filter';
import List from '../list';
import Form from '../form';
import _id from '../../core/id';

export default class App extends Component {

  state = {
    data: [
      { id: _id(), label: 'Going to learn React', important: true },
      { id: _id(), label: 'That is so good', important: false },
      { id: _id(), label: 'I need a break...', important: false },
      { id: _id(), label: 'Yes, of course!', important: false },
      { id: _id(), label: 'I went...', important: false },
    ]
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)]
      };
    });
  };

  addItem = (body) => {
    const item = {
      id: _id(),
      label: body,
      important: false
    }

    this.setState(({data}) => {
      return {
        data: [...data, item]
      }
    })
  };

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="search d-flex">
          <Search/>
          <Filter/>
        </div>
        <List
          posts={ this.state.data }
          onDelete={ this.deleteItem }
        />
        <Form
          onAdd={ this.addItem }
        />
      </div>
    );
  }
};
