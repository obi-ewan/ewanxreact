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


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { items };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.id !== id;
    const updatedList = this.state.items.filter(isNotId);
    this.setState({ items: updatedList });
  }

  render() {
    return (
      <div className="App">
        { this.state.items.map(item =>
          <div key={item.id}>

            <span>
              <a href={item.url}>{item.title}</a>
            </span>

            <span> 
              <button 
                  onClick={ console.log("lol") } type="button"> Dismiss 
              </button>
            </span>

          </div>
        )}
      </div>
    )
  }

}

export { App };
