import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { FormWrapper, Form, FormGroup, Input, Label, DogLogo, Title, AccountWrapper, RememberMe, CheckBox, LabelCheckBox, ForgotPassword, Anchor, Error, ChangeForm, Span } from './styles'
import { SubmitButton } from '../SubmitButton'


export const UserForm = ({ title, questionMessage, linkMessage,  onSubmit, handleChangeForm, error, disabled, showForgetPassword = true }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  } 

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} >
        <DogLogo />
        <Title>{title}</Title> 
        <FormGroup>
          <Input id={`email-${title}`} type='email' placeholder='Email' autocomplete='off' { ...email } disabled={disabled}  />
          <Label htmlFor={`email-${title}`}>Email</Label>
        </FormGroup>

        <FormGroup>
          <Input id={`password-${title}`} placeholder='Password' type='password' autocomplete='off' { ...password } disabled={disabled} />
          <Label htmlFor={`password-${title}`}>Password</Label>
        </FormGroup>

        { 
        <AccountWrapper showForgetPassword={showForgetPassword} >
            <RememberMe>
              <CheckBox id={`remember_me-${title}`} type="checkbox" disabled={disabled} />
              <LabelCheckBox htmlFor={`remember_me-${title}`}>
                Remember me
              </LabelCheckBox>
            </RememberMe>

            <ForgotPassword className="text-sm leading-5">
              <Anchor>
                Forgot your password?
              </Anchor>
            </ForgotPassword>
          </AccountWrapper>
        } 
        
        <SubmitButton disabled={disabled} >
          {title}
        </SubmitButton>

        <ChangeForm>
        <Span id='question_message'>
          {questionMessage}
          </Span>
          <Anchor id='link_message' onClick={handleChangeForm} >
              {linkMessage}
          </Anchor>
        </ChangeForm> 
      </Form>
      { error && <Error>{error}</Error> }
    </FormWrapper>
  )
}