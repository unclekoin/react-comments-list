import React from 'react';
import './app.css';
import Header from '../header';
import Search from '../search';
import Filter from '../filter';
import List from '../list';
import Form from '../form';

const App = () => {

  const data = [
    {label: 'Going to learn React', important: true},
    {label: 'That is so good', important: false},
    {label: 'I need a break...', important: false},
    {label: 'Yes, of course!', important: false},
    {label: 'I went...', important: false},
  ]

  return (
    <div className="app">
      <Header/>
      <div className="search d-flex">
        <Search/>
        <Filter />
      </div>
      <List posts={ data } />
      <Form />
    </div>
  );
};

export default App;
