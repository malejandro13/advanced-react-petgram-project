import gql from 'graphql-tag'

export const LIKE_PHOTO_MUTATION = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`