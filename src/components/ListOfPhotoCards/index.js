import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'
import PropTypes from 'prop-types'

export const ListOfPhotoCardsComponent = ({ photos = [] }) => (
	<ul>
		{
		photos.map((photo) => (
			<Item key={photo.id}>
				<PhotoCard {...photo} />
			</Item>
		))}
	</ul>
)

ListOfPhotoCardsComponent.propTypes = {
	photos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			liked: PropTypes.bool.isRequired,
			likes: PropTypes.number,
			src: PropTypes.string
		})
	)
}