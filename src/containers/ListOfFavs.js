import React, {Fragment} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FAVS_QUERY } from '../graphql/queries/FavQuery'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { SkeletonPhotoCard } from '../components/SkeletonPhotoCard'
import { PandaMessage } from '../components/PandaMessage'

export const ListOfFavs = () => {
	const { data, loading, error } = useQuery(FAVS_QUERY, {
		fetchPolicy: 'cache-and-network'
	})
	if(loading) return <SkeletonPhotoCard count={3}/>
	if(error) return error

	return (
		<Fragment>
			{
			data && data.favs.length !== 0
			? <ListOfPhotoCardsComponent photos={data.favs} /> 
			: <PandaMessage title={`you don't have favorites 😲`} />
			}
		</Fragment>
	)
}
