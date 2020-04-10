import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  background-color: #fff;
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
  padding: 3px;
`;

export const ImageWrapper = styled.div`
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background: linear-gradient(to right, #bf3b9b,#f1873b);
  height: auto;
  height: 81px;
  width: 81px;
  padding: 3px;
`