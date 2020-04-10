import gql from 'graphql-tag'

export const FAVS_QUERY = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`