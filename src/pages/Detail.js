import React from 'react'
import { DetailPhotoCard } from '../containers/DetailPhotoCard'
import { Layout } from '../components/Layout'

export default ({ detailId }) => (
  <Layout title={`Fotografía ${ detailId }`} subtitle={`Con Petgram puedes encontrar fotos de animales domésticos muy bonitos`} >
    <DetailPhotoCard photoId={detailId} />
  </Layout>
)

