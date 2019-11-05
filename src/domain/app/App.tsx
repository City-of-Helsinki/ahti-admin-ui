import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <p>Ahti admin käyttöliittymä</p>
          </header>
        </div>
      </Route>
  );
}

export default App;
