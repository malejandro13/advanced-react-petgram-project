import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://advanced-react-petgram-project.malejandro13.now.sh/graphql'
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('app'))
