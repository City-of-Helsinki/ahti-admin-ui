import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Route exact path="/">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{t('home.title')}</p>
        </header>
      </div>
    </Route>
  );
};

export default App;
