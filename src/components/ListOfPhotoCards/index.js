import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ photos = [] }) => (
	<ul>
		{
		photos.map((photo) => (
			<li key={photo.id}>
				<PhotoCard {...photo}  />
			</li>
		))}
	</ul>
)
