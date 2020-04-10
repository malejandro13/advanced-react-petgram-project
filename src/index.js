import React from 'react'
import ReactDom from 'react-dom'
import { StateProvider } from './Context'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { App } from './App'



const initialState = {
  user: { 
    isAuth: window.sessionStorage.getItem('token') ? true : false,
    token: window.sessionStorage.getItem('token')
  }
}
  
const reducer = (state, action) => {
  switch (action.type) {
    case 'loginSuccess':
      window.sessionStorage.setItem('token', action.dataAuth.token)
      return {
        ...state,
        user: action.dataAuth
      };

    case 'logoutSuccess':
      window.sessionStorage.removeItem('token')
      return {
        ...state,
        user: action.dataAuth
      };
      
    default:
      return state;
  }
}


const client = new ApolloClient({
  uri: 'https://advanced-react-petgram-project.malejandro13.now.sh/graphql',
	request: (operation) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
		operation.setContext({
			headers: {
				authorization
			}
		})
  },
  onError: ({ networkError, graphQLErrors }) => {
		if(networkError && networkError.result.code === 'invalid_token'){
      window.sessionStorage.removeItem(token)
      window.location.href = '/'
    }
	}
})

ReactDom.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>
, document.getElementById('app'))
