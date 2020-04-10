import styled, { css } from 'styled-components'

export const UserFormWrapper = styled.div`
  position: relative;
  perspective: 1000px;
`
export const SignIn = styled.div`
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;

  ${props => props.showSignIn && css`
    {
      transform: rotateY(0);
    }
  `}

  ${props => props.showSignUp && css`
    {
      transform: rotateY(-180deg);
    }
  `}
`
export const SignUp = styled(SignIn)`
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;

  ${props => props.showSignIn && css`
    {
      transform: rotateY(180deg);
    }
  `}

  ${props => props.showSignUp && css`
    {
      transform: rotateY(0);
    }
  `}
`