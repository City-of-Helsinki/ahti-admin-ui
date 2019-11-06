import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './domain/app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './domain/i18n/i18n';

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
