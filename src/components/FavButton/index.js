import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md' 
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button liked={liked} onClick={ onClick }>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}