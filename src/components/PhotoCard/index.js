import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutation } from '@apollo/react-hooks'
import { LIKE_PHOTO_MUTATION } from '../../graphql/mutations/PhotoMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [ setLikePhoto, { data } ] = useMutation(LIKE_PHOTO_MUTATION)
  
  const handleFavClick = () => {
    const input = { id: id }
    setLiked(!liked)
    !liked && setLikePhoto({
			variables: { input }
    })
  }
  
  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      }
    </Article>
  )
}