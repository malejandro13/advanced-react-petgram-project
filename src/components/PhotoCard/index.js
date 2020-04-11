import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutation } from '@apollo/react-hooks'
import { LIKE_PHOTO_MUTATION } from '../../graphql/mutations/PhotoMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import { Redirect } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const [ setLikePhoto, { data, error } ] = useMutation(LIKE_PHOTO_MUTATION)
  
  const handleFavClick = () => {
    const input = { id: id }
    setLikePhoto({
			variables: { input }
    })
  }

  if(error) return <Redirect noThrow to='/login' />
  
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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string,
  likes: function(props, propName, componentName){
    const propValue = props[propName]

    if(propValue === undefined) return new Error(`${propName} calue must be defined`)
    if(propValue < 0) return new Error(`${propName} calue must be greater than 0`)
  }
}