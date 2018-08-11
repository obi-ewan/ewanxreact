import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const items = [
  {
    id: 0,
    title: 'Twitter',
    url: 'https://twitter.com/PolarEwan',
  },
  {
    id: 1,
    title: 'Github',
    url: 'https://github.com/obi-ewan',
  },
];

function ItemList(props) {
  const items = props.items;
  const listItems =  items.map(item => 
        <div key={item.id}>
          <span><a href={item.url}>{item.title}</a></span>
        </div>
  );

  return <ul>{listItems}</ul>
}

class App extends Component {
  render() {
    return (
      <div className="App">        
        <ItemList items={items} />
      </div>
    );
  }
}

export default App;