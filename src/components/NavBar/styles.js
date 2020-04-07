import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  font-size: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  width: 100%;
  text-decoration: none;

  &[aria-current] {
    color: #000;

    &::after {
      ${fadeIn({ time: '.5s' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
    }
  }
`