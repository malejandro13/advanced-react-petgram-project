import React, { Fragment } from 'react'
import { useStateValue } from '../Context';
import { SubmitButton } from '../components/SubmitButton'

export const UserPage = () => {
  const [{ user }, dispatch] = useStateValue();

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch({
      type: 'logoutSuccess',
      dataAuth: { isAuth: false, token: '' }
    })
  }

  return (
    <Fragment>
      <h1>User</h1>
      <SubmitButton onClick={handleLogout} >Logout</SubmitButton>
    </Fragment>
  ) 
}