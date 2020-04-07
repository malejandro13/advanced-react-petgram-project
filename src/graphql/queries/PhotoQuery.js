import gql from 'graphql-tag'

export const PHOTOS_BY_CATEGORY_QUERY = gql`
	query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PHOTO_BY_ID_QUERY = gql`
  query photo($id: ID!) {
    photo(id: $id) {
      id
      likes
      src
    }
  }
`