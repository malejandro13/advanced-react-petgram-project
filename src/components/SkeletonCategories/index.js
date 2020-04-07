import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { SkeletonWrapper } from './styles'

export const SkeletonCategories = ({ count = 1 }) => (
  <SkeletonWrapper>
    <Skeleton circle={true} height={75} width={75} count={count} />
  </SkeletonWrapper>
)