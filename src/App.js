import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    let helloWorld = "Sup dawg";
    let firstName ="Ewan";
    let lastName = "Iscool";
    const fullName = firstName + " " + lastName;

    return (
      <div className="App">
        <h2> {helloWorld} </h2>
        <h3> {fullName}</h3>
      </div>
    );
  }
}

export default App;