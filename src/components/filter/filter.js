import React from 'react';

const Filter = ({ filter, onFilterSelect }) => {

  const buttonsData = [
    { name: 'all', label: 'All' },
    { name: 'like', label: 'With likes' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const cls = active ? 'btn btn-primary' : 'btn btn-outline-secondary';

    return (
      <button
        key={ name }
        className={ cls }
        onClick={ () => onFilterSelect(name) }
        type="button"
      >{ label }</button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default Filter;
