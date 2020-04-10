import React from 'react'
import { ListOfFavs } from '../containers/ListOfFavs'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title={`Tus favoritos`} subtitle={`Con Petgram puedes encontrar fotos de animales domésticos muy bonitos`} >
    <ListOfFavs />
  </Layout>
)