import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Item } from './styles'

export const ListOfPhotoCardsComponent = ({ photos = [] }) => (
	<ul>
		{
		photos.map((photo) => (
			<Item key={photo.id}>
				<PhotoCard {...photo}  />
			</Item>
		))}
	</ul>
)
