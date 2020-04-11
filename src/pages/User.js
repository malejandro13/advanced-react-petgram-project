import React from 'react'
import { useStateValue } from '../Context';
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

import styled from 'styled-components'

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80vh;
`

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: #bf3b99;
  text-align: center;
  margin-top: 15px;
`

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
      <UserWrapper>
        <Title>User</Title>
        <SubmitButton onClick={handleLogout} >Logout</SubmitButton>
      </UserWrapper>
    </Layout>
  ) 
}