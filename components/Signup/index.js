import { useState, Fragment } from 'react'
import { Formik } from 'formik'
import qs from 'qs'
import styled, { css } from 'styled-components'
import Router from 'next/router'

import { Button, Notice, Input } from '../UI/index'

const Signup = props => {
  const [successMessage, setSuccessMessage] = useState(true)

  return (
    <Container>
      <FormWrapper>
        <StyledTitle isLogin>Admin Portal</StyledTitle>
        <StyledP>Sign Up New Account</StyledP>
        <Formik
          enableReinitialize
          initialValues={{ email: '', password: '', verifyPassword: '' }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            setSubmitting(true)

            const res = await fetch('/api/auth/signup', {
              method: 'POST',
              body: qs.stringify({ ...values })
            })

            setSubmitting(false)

            setSuccessMessage(true)
          }}
          validate={values => {
            const errors = {}
            const emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*([^a-zA-Z\d\s])).{8,}$/

            if (!values.email) {
              errors.email = 'Email is required'
            } else if (!emailFormat.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            if (!values.password) {
              errors.password = 'Password is required'
            } else if (!passwordFormat.test(values.password)) {
              errors.password =
                'Requires: 1 number, 1 special character, 1 uppercase letter, and 1 lowercase letter. Minimum length: 8 characters.'
            }
            if (values.password !== values.verifyPassword) {
              errors.verifyPassword = 'Passwords do not match.'
            }

            return errors
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            isSubmitting,
            touched,
            setFieldTouched
          }) => (
            <form onSubmit={handleSubmit}>
              <Wrapper>
                <Notice isError isSmall isVisible={errors.serverError}>
                  <p>{errors.serverError}</p>
                </Notice>
                <Notice isSuccess isSmall isVisible={successMessage}>
                  <p>
                    Successfully created account, request account verification from Devs before
                    loging in.
                  </p>
                </Notice>

                {successMessage ? (
                  <ButtonWrapper>
                    <Button
                      fancy
                      glow
                      jumbo
                      block
                      onClick={() => Router.push('/login')}
                      label="Take me to login"
                    />
                  </ButtonWrapper>
                ) : (
                  <Fragment>
                    <Input
                      type="email"
                      name="email"
                      autocomplete="off"
                      onChange={handleChange}
                      placeholder="Email"
                      value={values.email}
                      glow
                      error={errors.email}
                      onBlur={() => setFieldTouched('email', true)}
                      showError={touched.email}
                    />
                    <Input
                      type="password"
                      name="password"
                      autocomplete="current-password"
                      onChange={handleChange}
                      placeholder="Password"
                      value={values.password}
                      togglePrivacy
                      glow
                      error={errors.password}
                      onBlur={() => setFieldTouched('password', true)}
                      showError={touched.password}
                    />
                    <Input
                      type="password"
                      name="verifyPassword"
                      autocomplete="current-password"
                      onChange={handleChange}
                      placeholder="Verify Password"
                      value={values.verifyPassword}
                      togglePrivacy
                      glow
                      error={errors.verifyPassword}
                      onBlur={() => setFieldTouched('verifyPassword', true)}
                      showError={touched.verifyPassword}
                    />
                    <ButtonWrapper>
                      <Button
                        type="submit"
                        label="Sign In"
                        fancy
                        glow
                        jumbo
                        block
                        loading={isSubmitting}
                      />
                    </ButtonWrapper>
                  </Fragment>
                )}
              </Wrapper>
            </form>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: rgb(39, 22, 103);
  height: 100vh;
  display: flex;
  align-items: center;
`

const FormWrapper = styled.div`
  width: 30rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  background-color: ${({ theme }) => theme.defaultColor.pastel};
  padding: 2rem;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
`

const Wrapper = styled.section`
  position: relative;
  margin: 0;
`

const ButtonWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const StyledP = styled.p`
  margin: 0 1rem 2em;
  font-size: 1em;
  text-align: center;
  line-height: 1.5;
  color: ${props => props.theme.colors.gray};
  animation: 1s cubic-bezier(0.19, 1, 0.22, 1) 0.2s both fadeInUp;
`

const StyledTitle = styled.h1`
  margin: 0 0 0.25em;
  font-family: 'pragmatica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 1.5;
  text-align: center;
  animation: 1s cubic-bezier(0.19, 1, 0.22, 1) 0.15s both fadeInUp;

  ${props =>
    props.isLogin &&
    css`
      font-size: 1.75em;
    `};
`
export default Signup
