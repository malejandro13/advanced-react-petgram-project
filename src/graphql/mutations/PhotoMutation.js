import gql from 'graphql-tag'

export const LIKE_PHOTO_MUTATION = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`