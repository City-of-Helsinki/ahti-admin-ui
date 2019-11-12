import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './app.module.scss';
import PlacesContainer from '../places/Places';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={styles.app}>
            <header className={styles.header}>
              <p>{t('home.title')}</p>
            </header>
          </div>
        </Route>
        <Route exact path="/places">
          <PlacesContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
