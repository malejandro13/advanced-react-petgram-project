import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const SIGNIN_MUTATION = gql`
  mutation signin($input: UserCredentials!) {
    signin(input: $input)
  }
`