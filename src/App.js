import React, { Fragment } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { useStateValue } from './Context'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/Home'
import { DetailPage } from './pages/Detail'
import { UserPage } from './pages/User'
import { FavsPage } from './pages/Favs'
import { NotRegisteredUserPage } from './pages/NotRegistered'
import { PandaMessagePage } from './pages/PandaMessage'

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
        {!user.isAuth && <NotRegisteredUserPage path='/login' />}
        {!user.isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!user.isAuth && <Redirect noThrow from='/user' to='/login' />}
        {user.isAuth && <Redirect noThrow from='/login' to='/' />}
        <FavsPage path='/favs' />
        <UserPage path='/user' />
        <PandaMessagePage default title='Page not found 🙁' />
      </Router>
      <NavBar />
    </Fragment>
  )
}