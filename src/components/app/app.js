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
      { id: _id(), label: 'Going to learn React', important: false, like: false },
      { id: _id(), label: 'That is so good', important: false, like: false },
      { id: _id(), label: 'I need a break...', important: false, like: false },
      { id: _id(), label: 'Yes, of course!', important: false, like: false },
      { id: _id(), label: 'I went...', important: false, like: false },
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
      important: false,
      like: false
    };

    this.setState(({ data }) => {
      return {
        data: [...data, item]
      };
    });
  };

  modifiedData = (field, id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const modifiedItem = { ...data[index], [field]: !data[index][field] };

      return {
        data: [...data.slice(0, index), modifiedItem, ...data.slice(index + 1)]
      };
    });
  }

  onToggleImportant = (id) => {
    return this.modifiedData('important', id);
  };

  onToggleLiked = (id) => {
    return this.modifiedData('like', id);
  };

  render() {
    const { data } = this.state;

    const liked = data.filter((item) => item.like).length;
    const posts = data.length;

    return (
      <div className="app">
        <Header
          liked={ liked }
          posts={ posts }
        />
        <div className="search d-flex">
          <Search/>
          <Filter/>
        </div>
        <List
          data={ this.state.data }
          onDelete={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleLiked={ this.onToggleLiked }
        />
        <Form
          onAdd={ this.addItem }
        />
      </div>
    );
  }
};
