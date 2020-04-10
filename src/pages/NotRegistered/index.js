import React, { Fragment, useState, useEffect } from 'react'
import { useStateValue } from '../../Context';
import { UserForm } from '../../components/UserForm'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION, SIGNIN_MUTATION } from '../../graphql/mutations/AuthMutation'
import { UserFormWrapper, SignUp, SignIn } from './styles'
import idx from 'idx'


export const NotRegisteredUserPage = () => {
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
    <Fragment>
      <UserFormWrapper>
          <SignIn showSignIn={showSignIn} showSignUp={showSignUp}>
            <UserForm  title='Sign in' questionMessage='you are not registered?' linkMessage='Sign up' onSubmit={handleSignIn} handleChangeForm={handleChangeForm} error={errorMsgSignin} disabled={loadingSignin} />
          </SignIn>
          <SignUp showSignIn={showSignIn} showSignUp={showSignUp}>
            <UserForm  title='Sign up' questionMessage='you are already registered?' linkMessage='Sign in' onSubmit={handleSignUp} handleChangeForm={handleChangeForm} error={errorMsgSignup} disabled={loadingSignup} showForgetPassword={ false } />
          </SignUp>
      </UserFormWrapper>
    </Fragment>
  )
}