import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, } from './App';
import { Bindingexample, } from './examples/bindings'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bindingexample />, document.getElementById('hey'));
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();
