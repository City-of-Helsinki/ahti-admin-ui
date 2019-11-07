import React from 'react';
import styles from './app.module.scss';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Route exact path="/">
      <div className={styles.app}>
        <header className={styles.header}>
          <p>{t('home.title')}</p>
        </header>
      </div>
    </Route>
  );
};

export default App;
