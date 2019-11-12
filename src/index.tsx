import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/main.scss';
import App from './domain/app/App';
import './domain/i18n/i18n';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: process.env.REACT_APP_MYHELSINKI_GRAPHQL_API_URI
});

const AppWrapper: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
