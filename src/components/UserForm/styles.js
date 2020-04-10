import styled, { css } from 'styled-components'
import { DogSvg as DogUserForm } from '../DogSvg'

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  max-width: 500px;
  height: 80vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 30px 0;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 16px 40px rgba(0,0,0,.1);
`

export const DogLogo = styled(DogUserForm)`
  fill: #bf3b99;
  width: 150px;
  height: auto;
  position: absolute;
  top: -24%;
`

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  line-height: 2.25rem;
  color: #bf3b99;
  text-align: center;
  margin-bottom: 15px;
`

export const FormGroup = styled.div`
  width: 90%;
  &:not(:last-child) {
		margin-bottom: 20px;
  }
  
  & > input:placeholder-shown + label {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-40px);
	}
`

export const Input = styled.input`
  font-size: 15px;
  font-family: inherit;
  color: inherit;
  padding: 15px 20px;
  border-radius: 2px;
  background-color: rgba(255,255,255, .5);
  border: none;
  border-bottom: 1px solid #bf3b99;
  width: 100%;
  display: block;
  transition: all .3s;
    
  &:focus {
    outline: none;
    box-shadow: 0 1px 22px rgba(0,0,0, .1);
    border-bottom: 3px solid #30ff5c;
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #999;
  }
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 7px;
  display: block;
  transition: all .3s;
`

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

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 20px 0;
  width: 90%;
  opacity: 0;

  ${props => props.showForgetPassword && css`
    {
      opacity: 1;
    }
  `}
`

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  color: indigo;
  transition: all 1s cubic-bezier(.4,0,.2,1);

  &:checked {
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="100px" width="100px"><g><path d="M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z"/><path d="M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z"/><path d="M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z"/><path d="M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6   c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z"/><path d="M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z"/><path d="M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7   c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z"/><path d="M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7   C20.6,84.2,23.2,86.3,26.2,88.2z"/><path d="M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6   c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z"/></g></svg>');
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(164,202,254,.45);
    border-color: #a4cafe;
  }

  &[disabled] {
    opacity: 0.3;
  }
`

export const LabelCheckBox = styled.label`
  display: block;
  margin-left: 5px;
  font-size: .875rem;
  line-height: 1.25rem;
  color: #161e2e;
`

export const ForgotPassword = styled.div`
  font-size: .875rem;
  line-height: 1.25rem;
`
export const Anchor = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: #bf3b99;
  background-color: transparent;
  transition: all 1s cubic-bezier(.4,0,.2,1);
  cursor: pointer;

  &:hover{
    color: #f477d0;
  }
`
export const Error = styled.span`
  font-size: .875rem;
  line-height: 1.25rem;
  color: red;
`

export const ChangeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`


export const Span = styled.span`
  font-size: .875rem;
  line-height: 1.25rem;
  margin-right: 5px;
`