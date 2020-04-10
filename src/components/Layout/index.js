import React, { Fragment } from 'react'
import { LayoutWrapper } from './styles'
import { Helmet } from 'react-helmet'
import { Logo } from '../Logo'
import { NavBar } from '../NavBar'

export const Layout = ({ children, title, subtitle }) => (
  <Fragment>
    <Helmet>
      { title && <title>{title} | Petgram 🐶 </title> }
      { subtitle && <meta name='description' content={subtitle} /> }
    </Helmet>
    <Logo />
    <LayoutWrapper>
      { children }
    </LayoutWrapper>
    <NavBar />
  </Fragment>
)