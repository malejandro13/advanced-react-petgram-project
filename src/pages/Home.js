import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const HomePage = ({ categoryId }) => (
  <Layout title={`App de fotos de mascotas`} subtitle={`Con Petgram puedes encontrar fotos de animales domésticos muy bonitos`}>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId}/>
  </Layout>
)