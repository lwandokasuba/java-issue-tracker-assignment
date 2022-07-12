import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import App from './App';
import { IssueProvider } from './context/IssueContext';
import theme from './theme';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <IssueProvider>
          <App />
        </IssueProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
