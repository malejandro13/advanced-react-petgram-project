import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PHOTO_BY_ID_QUERY } from '../graphql/queries/PhotoQuery'
import { PhotoCard } from '../components/PhotoCard'
import { SkeletonPhotoCard } from '../components/SkeletonPhotoCard'

export const DetailPhotoCard = ({ detailId = 1 }) => {
	const { data, loading, error } = useQuery(PHOTO_BY_ID_QUERY, {
		variables: {
			id: detailId
		}
	})
	if(loading) return <SkeletonPhotoCard count={1}/>
	if(error) return error
	return <PhotoCard { ...data.photo } />
}
