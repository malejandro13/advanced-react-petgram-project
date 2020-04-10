import React, { Fragment, useState, useEffect } from 'react'
import { useStateValue } from '../Context';
import { UserForm } from '../components/UserForm'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION, SIGNIN_MUTATION } from '../graphql/mutations/AuthMutation'
import idx from 'idx'
import { Layout } from '../components/Layout'

import styled, { css } from 'styled-components'

const UserFormWrapper = styled.div`
  position: relative;
  perspective: 1000px;
`
const SignIn = styled.div`
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;

  ${props => props.showSignIn && css`
    {
      transform: rotateY(0);
    }
  `}

  ${props => props.showSignUp && css`
    {
      transform: rotateY(-180deg);
    }
  `}
`
const SignUp = styled(SignIn)`
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;

  ${props => props.showSignIn && css`
    {
      transform: rotateY(180deg);
    }
  `}

  ${props => props.showSignUp && css`
    {
      transform: rotateY(0);
    }
  `}
`


export default () => {
  const [ showSignIn, setShowSignIn ] = useState(true)
  const [ showSignUp, setShowSignUp ] = useState(false)
  const [{ user }, dispatch] = useStateValue();
  const [ signup, { data: dataSignup, loading: loadingSignup, error: errorSignup } ] = useMutation(SIGNUP_MUTATION)
  
  const [ signin, { data: dataSignin, loading: loadingSignin, error: errorSignin } ] = useMutation(SIGNIN_MUTATION)

  useEffect(() => {
    const successResult = idx(dataSignup, (_) => _.signup)
    if(successResult){
      dispatch({
          type: 'loginSuccess',
          dataAuth: { isAuth: true, token: successResult }
      })
    }

  }, [dataSignup])

  const handleSignUp = ({ email, password }) => {
    const input = { email, password }
    signup({
			variables: { input }
    })
  }

  const handleSignIn = ({ email, password }) => {
    const input = { email, password }
    signin({
			variables: { input }
    })
  }

  const handleChangeForm = (e) => {
    e.preventDefault()
    setShowSignIn(!showSignIn)
    setShowSignUp(!showSignUp)
  }

  const errorMsgSignup = errorSignup && 'User already exists'
  const errorMsgSignin = errorSignin && 'Credentials are invalid'

  return (
    <Layout title={showSignIn ? 'Sign in' : 'Sign up'}>
      <UserFormWrapper>
          <SignIn showSignIn={showSignIn} showSignUp={showSignUp}>
            <UserForm  title='Sign in' questionMessage='you are not registered?' linkMessage='Sign up' onSubmit={handleSignIn} handleChangeForm={handleChangeForm} error={errorMsgSignin} disabled={loadingSignin} />
          </SignIn>
          <SignUp showSignIn={showSignIn} showSignUp={showSignUp}>
            <UserForm  title='Sign up' questionMessage='you are already registered?' linkMessage='Sign in' onSubmit={handleSignUp} handleChangeForm={handleChangeForm} error={errorMsgSignup} disabled={loadingSignup} showForgetPassword={ false } />
          </SignUp>
      </UserFormWrapper>
    </Layout>
  )
}