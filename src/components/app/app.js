import React from 'react';
import './app.css';
import Header from '../header';
import Search from '../search';
import Filter from '../filter';
import List from '../list';
import Form from '../form';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="search d-flex">
        <Search/>
        <Filter />
      </div>
      <List />
      <Form />
    </div>
  );
};

export default App;
