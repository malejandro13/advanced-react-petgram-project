import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useFetchData } from '../../hooks/useFetchData'
import { SkeletonCategories } from '../SkeletonCategories'


const ListOfCategoriesComponent = () => {
  const [ showFixed, setShowFixed ] = useState(false)
  const { data, loading } = useFetchData('https://advanced-react-petgram-project.malejandro13.now.sh/categories')

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200 
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <SkeletonCategories count={4} />
        : data.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <Fragment>
      { renderList() }
      { showFixed && renderList(true) }
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)