import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const Home = ({ categoryId }) => (
  <Layout title={`App de fotos de mascotas`} subtitle={`Con Petgram puedes encontrar fotos de animales domésticos muy bonitos`}>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId}/>
  </Layout>
)

export default React.memo(Home, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})