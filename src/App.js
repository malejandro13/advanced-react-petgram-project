import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { HomePage } from './pages/Home'
import { DetailPage } from './pages/Detail'
import { NavBar } from './components/NavBar'


export const App = () => (
  <Fragment>
    <GlobalStyle />
    <Logo />
    <Router>
      <HomePage path='/'/>
      <HomePage path='/pet/:categoryId'/>
      <DetailPage path='/detail/:detailId' />
    </Router>
    <NavBar />
  </Fragment>
)