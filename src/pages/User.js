import React from 'react'
import { useStateValue } from '../Context';
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const [{ user }, dispatch] = useStateValue();

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch({
      type: 'logoutSuccess',
      dataAuth: { isAuth: false, token: '' }
    })
  }

  return (
    <Layout title={`User`}>
      <h1>User</h1>
      <SubmitButton onClick={handleLogout} >Logout</SubmitButton>
    </Layout>
  ) 
}