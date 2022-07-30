import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import App from './App';


// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloProvider } from '@apollo/react-hooks';

import './assets/scss/base.scss'

// const cache = new InMemoryCache()

// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// })

// const client = new ApolloClient({
//   cache,
//   link: httpLink
// })

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

