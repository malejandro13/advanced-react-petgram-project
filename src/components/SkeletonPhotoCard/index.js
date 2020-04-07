import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { SkeletonFlex, SkeletonWrapper } from './styles'

export const SkeletonPhotoCard = ({ count = 1 }) => {
	const elements = [];

	for (let i = 0; i < count; i++) {
		elements.push(
			<SkeletonWrapper key={i}>
				<Skeleton height={200} width={'100%'} />
				<SkeletonFlex>
					<Skeleton circle={true} height={45} width={45} />
					<Skeleton height={30} width={45} />
				</SkeletonFlex>
			</SkeletonWrapper>
		)
	}
  return elements
}