/* eslint-disable arrow-body-style */
import { rgba } from 'polished'
import React from 'react'
import styled, { css } from 'styled-components'

const Notice = ({ isVisible, isWarning, isError, isSuccess, isPurple, isSmall, children }) => {
  return (
    <Wrapper
      isVisible={isVisible}
      isWarning={isWarning}
      isError={isError}
      isSuccess={isSuccess}
      isPurple={isPurple}
      isSmall={isSmall}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  display: none;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1em;
  border-radius: 0 8px 8px 0;
  background: ${props => rgba(props.theme.colors.gray, 0.1)};
  border-left: 0.25em solid;
  color: ${props => props.theme.colors.gray};
  animation: .2s linear both fadeIn;
  
  ${props =>
    props.isVisible &&
    css`
      display: block;
    `}
  
  ${props =>
    props.isWarning &&
    css`
      background: ${rgba(props.theme.defaultColor.yellow, 0.15)};
      color: ${props.theme.defaultColor.yellow};

      p {
        color: ${props.theme.defaultColor.yellow};
      }
    `}

  ${props =>
    props.isError &&
    css`
      background: ${rgba(props.theme.defaultColor.errorColor, 0.15)};
      color: ${props.theme.defaultColor.errorColor};

      p {
        color: ${props.theme.defaultColor.errorColor};
      }
    `}
  
  ${props =>
    props.isSuccess &&
    css`
      background: ${rgba(props.theme.defaultColor.green, 0.15)};
      color: ${props.theme.defaultColor.green};

      p {
        color: ${props.theme.defaultColor.green};
      }
    `}

  ${props =>
    props.isPurple &&
    css`
      background: ${rgba(props.theme.defaultColor.purple, 0.15)};
      color: ${props.theme.defaultColor.purple};

      p {
        color: ${props.theme.defaultColor.purple};
      }
    `}

  ${props =>
    props.isSmall &&
    css`
      font-size: 0.85em;
    `}

  p {
      margin: 0 0 .75em;
      font-size: 1em;
      font-family: 'pragmatica','Helvetica Neue',Helvetica,Arial,sans-serif;
      font-weight: 400;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

Notice.defaultProps = {
  isVisible: false
}

export { Notice }
