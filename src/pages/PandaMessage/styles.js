import styled from 'styled-components'
import { PandaSvg as PandaSvgNotFavs } from '../../components/PandaSvg'

export const PandaMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PandaSvg = styled(PandaSvgNotFavs)`
  width: 300px;
  height: 300px;
  fill: #b93ead;
`

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: #bf3b99;
  text-align: center;
  margin-top: 15px;
`