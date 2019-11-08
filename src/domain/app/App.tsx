import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './app.module.scss';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <Route exact path="/">
        <div className={styles.app}>
          <header className={styles.header}>
            <p>{t('home.title')}</p>
          </header>
        </div>
      </Route>
    </Router>
  );
};

export default App;
