import { Formik } from 'formik'
import Router from 'next/router'
import qs from 'qs'
import { Cookies } from 'react-cookie'
import styled, { css } from 'styled-components'
import { Button, Input, Notice } from '../UI/index'

const cookies = new Cookies()

const Login = props => (
  <Container>
    <FormWrapper>
      <StyledTitle isLogin>Admin Portal</StyledTitle>
      <StyledP>Sign in to your account to continue.</StyledP>
      <Formik
        enableReinitialize
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          setSubmitting(true)

          try {
            const res = await fetch('/api/auth/login', {
              method: 'POST',
              body: qs.stringify({ ...values })
            })
            setSubmitting(false)

            if (res.status === 401) {
              setErrors({ serverError: 'Email or password is incorrect, or unverified account' })
              return
            }

            const data = await res.json()

            cookies.set('token', data.token)
            // pushing to just / was broken,  this was the upvoted SO answer
            Router.push('/error', '/')
          } catch (e) {
            setSubmitting(false)

            console.log('login error', e)
          }
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
              test: {process.env.NEXT_PUBLIC_TEST}
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
            </Wrapper>
          </form>
        )}
      </Formik>
    </FormWrapper>
  </Container>
)

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
export default Login
