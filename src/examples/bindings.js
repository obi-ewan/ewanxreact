import React, { Component } from 'react';

class Bindingexample extends Component {

    // we must bind class methods as they are not automatically bound to 'this.' instance
    constructor() {
        super();
  
        this.onClick = this.onClick.bind(this)
    }
  
    onClick() {
      console.log(this)
    }
  
    // you can avoid the above approach, arrow functions automatically bind it;
    onClick2 = () => {
      console.log(this)
    }
  
    // we can also bind it in the render function; this.onClick.bind, 
    // but that means it runs every time it is rendered (non-performant)
    render() {
      return (
        <button onClick={this.onClick} type ="button"> Click me </button>
      )
    }
  
  }

export { Bindingexample };
