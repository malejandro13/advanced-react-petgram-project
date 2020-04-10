import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { useStateValue } from './Context'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/Home'
import { DetailPage } from './pages/Detail'
import { UserPage } from './pages/User'
import { FavsPage } from './pages/Favs'
import { NotRegisteredUserPage } from './pages/NotRegistered'



export const App = () => {
  const [ { user }, dispach ] = useStateValue();

  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
        <HomePage path='/' />
        <HomePage path='/pet/:categoryId' />
        <DetailPage path='/detail/:detailId' />
      </Router>
      {
        user.isAuth
        ? <Router>
            <FavsPage path='/favs' />
            <UserPage path='/user' />
          </Router>
        : <Router>
            <NotRegisteredUserPage path='/favs' />
            <NotRegisteredUserPage path='/user' />
          </Router>
      }
      <NavBar />
    </Fragment>
  )
}