import React from 'react'
import { PandaSvg, PandaMessageWrapper, Title } from './styles'

export const PandaMessage = ({ title }) => (
  <PandaMessageWrapper>
    <PandaSvg /> 
    <Title>{ title }</Title>
  </PandaMessageWrapper>
)