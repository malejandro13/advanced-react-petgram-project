import React, { Suspense, lazy } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { useStateValue } from './Context'
import Loader from './pages/Loader'

const HomePage = lazy(() => import('./pages/Home'))
const FavsPage = lazy(() => import('./pages/Favs'))
const DetailPage = lazy(() => import('./pages/Detail'))
const UserPage = lazy(() => import('./pages/User'))
const NotRegisteredUserPage = lazy(() => import('./pages/NotRegisteredUser'))
const NotFoundPage = lazy(() => import('./pages/NotFound'))

export const App = () => {
  const [ { user }, dispach ] = useStateValue();

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Router>
        <HomePage path='/' />
        <HomePage path='/pet/:categoryId' />
        <DetailPage path='/detail/:detailId' />
        {!user.isAuth && <NotRegisteredUserPage path='/login' />}
        {!user.isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!user.isAuth && <Redirect noThrow from='/user' to='/login' />}
        {user.isAuth && <Redirect noThrow from='/login' to='/' />}
        
        <FavsPage path='/favs' />
        <UserPage path='/user' />
        <NotFoundPage default title='Page not found 🙁' />
      </Router>
    </Suspense>
  )
}