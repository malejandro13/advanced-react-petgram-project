import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-size: 15px;
	font-weight: 300;
	text-transform: uppercase;
	border: none;
	border-radius: 100px;
	background-image: linear-gradient(to right, #bf3b99, #f1863b);
  color: #fff;
  padding: 13px 40px;
	position: relative;
	overflow: hidden;
  cursor: pointer;
  transition: all .2s;

	&:hover {
    background-image: linear-gradient(to left, #bf3b99, #f1863b);
    box-shadow: 0 10px 20px rgba(0,0,0, .15);
		transform: translateY(-2px);
	}

	&:focus {
    outline: none;
    box-shadow: 0 5px 10px rgba(0,0,0, .15);
		transform: translateY(0);
  }
  
  &[disabled] {
    opacity: 0.4;
  }
`
