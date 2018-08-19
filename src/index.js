import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Kms,  } from './components/kms';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Kms />, document.getElementById('kms'));

let html = document.querySelector('html');
let gValue = 107;
let hasHitBottomG = false;
let hasHitTopG = false;

//document.onmousemove = changeColor
document.addEventListener("mousemove", changeColor)
document.addEventListener("touchmove", changeColor)

function changeColor(event) {
  if (gValue < 1 || (hasHitBottomG === true && !(gValue >= 255)) ) { 
    hasHitBottomG = true;
    hasHitTopG = false;
    gValue+=5;
  } else if (gValue >= 255 || hasHitTopG === true ) {
    hasHitTopG = true;
    hasHitBottomG = false;
    gValue-=5;
  } else {
    gValue-=5;
  }

  let backgroundColor = "background: linear-gradient(77deg, rgb(205, 51, 239) 1%, rgb(65, :gvalue:, 244) 100%);".replace(':gvalue:', gValue);
  html.style.cssText = backgroundColor;
}


if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();
