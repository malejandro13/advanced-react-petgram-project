import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation' 

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    margin-bottom: 10px;

    ${props => props.fixed && css`
    {
        ${fadeIn({ time: '.4s' })}
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .3);
        top: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        transform: scale(.5);
        z-index: 1;
    }
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`