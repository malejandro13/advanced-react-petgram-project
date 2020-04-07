import styled from 'styled-components'

export const SkeletonWrapper = styled.div`
  & > div {
    margin: 3px 0 10px 0;
  }
`

export const SkeletonFlex = styled.div`
  display: flex;
  align-items: center;
  
  & > span:not(:last-child) {
    margin-right: 10px;
  }
`