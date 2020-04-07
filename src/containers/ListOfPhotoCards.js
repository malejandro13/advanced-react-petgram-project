import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PHOTOS_BY_CATEGORY_QUERY } from '../graphql/queries/PhotoQuery'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { SkeletonPhotoCard } from '../components/SkeletonPhotoCard'

export const ListOfPhotoCards = ({ categoryId = 1 }) => {
	const { data, loading, error } = useQuery(PHOTOS_BY_CATEGORY_QUERY, {
		variables: {
			categoryId
		}
	})
	if(loading) return <SkeletonPhotoCard count={3}/>
	if(error) return error
	return <ListOfPhotoCardsComponent photos={data.photos} />
}
