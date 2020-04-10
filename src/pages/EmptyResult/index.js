import React from 'react'
import { PandaSvg, EmptyResultWrapper, Title } from './styles'

export const EmptyResultPage = ({ title }) => (
  <EmptyResultWrapper>
    <PandaSvg /> 
    <Title>{ title }</Title>
  </EmptyResultWrapper>
)