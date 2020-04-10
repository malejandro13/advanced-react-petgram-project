import React from 'react'
import styled from 'styled-components'
import { Loader } from '../components/Loader'

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export default () => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
)