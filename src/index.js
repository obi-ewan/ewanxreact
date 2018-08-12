import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Kms,  } from './components/kms';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Kms />, document.getElementById('kms'));


if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();
