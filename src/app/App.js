import React, { Component } from 'react';
import './App.scss';
import Routes from '../routes';

import { ApolloProvider } from 'react-apollo'
import client from '../api/graphql/client'


const App = () => {

     return (
        <ApolloProvider client={client}>
          <div className="App">
            <Routes />
          </div>
        </ApolloProvider>
    );
}

export default App;
