import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export const HomePage = ({ categoryId }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId}/>
  </Fragment>
)